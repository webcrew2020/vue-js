<template>
    <input type="text" name="title" v-model="form.title">
    <QuillEditor :options="options" v-model:content="form.dsc" contentType="html"/>
    <button v-on:click="updateData()">Update</button>
 </template>
 <script>
    import { QuillEditor } from '@vueup/vue-quill'
    import axios from 'axios'
    export default{
        name:"updateBlog",
        components: {
            QuillEditor
        },
        data(){
        
            var toolbarOptions = [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'direction': 'rtl' }],  
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                ['link', 'image'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
            
                ['clean']
            ];
            
            return { 
              url:process.env.VUE_APP_BASIC_PATH,
                errors:"",    
                options: {
                        debug: 'info',
                        modules: {
                            toolbar: toolbarOptions
                        },
                        placeholder: 'Write here.....',
                        readOnly: false,
                        theme: 'snow'
                    },
                form:{
                        title:"",
                        dsc:""
                    }
                }
        },
       async mounted() {
            const id = this.$route.params.id;
            let result = await axios.get(this.url+'get/'+id)
           this.form = result.data.data
        },
        methods:{
        updateData(){
        const id = this.$route.params.id;
        axios.put(this.url+'update/'+id, this.form).then((res)=>{
          if(res.data.success == false){
            let e = res.data.message //e => error
            let d = e.split('|') // d => data
            this.errors = d
          }
          if(res.data.success == true){
            alert(res.data.message)
            this.$router.push({ name: 'getData' });
          }
        }).catch((err)=>{
          console.log(err)
        })
    }
    }
    }
 </script>
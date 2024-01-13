<template>
  <input type="text" name="title" v-model="form.title">
  <p>{{ form.dt }}</p>
  <QuillEditor :options="options" v-model:content="form.dsc" contentType="html"/>
  <button v-on:click="saveData()">Submit</button>
  <div class="error">
    <p v-for="err in errors" v-bind:key="err.id">{{ err }}</p>
    </div>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';

 export default {
    name: "MyHome",
    components: {
    QuillEditor
  },
    data(){

        var toolbarOptions = [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'direction': 'rtl' }],  
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            ['link', 'image'],                     // text direction
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
];

        return { 
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
    methods:{
        saveData(){
        axios.post('http://localhost:8000/api/save', this.form).then((res)=>{
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
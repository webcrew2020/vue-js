<template>
    <div v-for="data in list" v-bind:key="data.id">
        <h1>{{ data.title }}</h1>
        <div v-html="data.dsc">
        </div>
        <router-link :to="'/update/'+data.id">Update</router-link>.........
        <router-link :to="'/get/'+data.id">Read More</router-link>.........
        <button @click="blogDel(data.id)">Delete</button>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"GetBlog",
    data(){
        return{
            list:undefined
        }
    },
    mounted(){
        this.getDataBlog()
    },
    methods:{
        async getDataBlog(){
            await axios.get('http://localhost:8000/api/get').then((res)=>{
            this.list = res.data
        }).catch((err)=>{
            console.log(err)
        })
        },
        // =========================== //
        async blogDel(itemId){
        await axios.post('http://localhost:8000/api/del/'+`${itemId}`).then((res)=>{
          if(res.data.success == false){
            let e = res.data.message //e => error
            let d = e.split('|') // d => data
            this.errors = d
          }
          if(res.data.success == true){
            alert(res.data.message)
            this.getDataBlog()
          }
        }).catch((err)=>{
          console.log(err)
        })
    }
    }
}

</script>

<style>

</style>
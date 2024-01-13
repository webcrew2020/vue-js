<template>
    <ul>
        <li v-for="e in errors" v-bind:key="e.id">{{ e }}</li>
    </ul>
  
    <form @submit="postData">
    <input type="email" v-model="data.email" name="email"><br>
    <input type="password" v-model="data.password" name="password"><br>
    <button type="submit">Submit </button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name:"user-Login",
    data(){
        return {
            errors:"",
            data:{
                email:"",
                password:"",
                role:2,
                fcm_token:"1wewfert3453rrfe544feee"
            }
        }
    },
    methods:{
        postData(e){
            e.preventDefault()
            
                axios.post("https://layajee.cherryberrycloud.com/api/login",this.data).then((res)=>{
                    if(res.data.status == 400){
                        let erro = res.data.message
                        let d = erro.split('. ')
                        this.errors = d

                    }
                    localStorage.setItem("token", res.data.token)
            }).catch((err)=>{
                console.log(err)
            })
            
        }
    }
}
</script>

<style>


</style>
<template>
    <div v-for="d in details.images" v-bind:key="d.id">
        <img :src=d class="item-box">
    </div>
    
    <h2>{{ details.title }}</h2>
    <p>{{ details.dedescription }}</p>
    <p>{{ details.price }}</p>
    <button @click="addPro()">+</button>
    <p >{{ qty }}</p>
    <button @click="subPro()">-</button><br>
    

</template>
<script>
import axios from 'axios'

export default {
    data(){
       return{
        url:process.env.VUE_APP_TEST_PATH,
        details:"",
        qty:1,
       }
    },
    mounted(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            axios.get(this.url+'products/'+this.$route.params.id)
            .then((res)=>{
                console.log(res.data)
                this.details = res.data
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        addPro(){
            this.qty++
        },
        subPro(){
            if(this.qty == 1){
                this.qty
            }else{
                this.qty--
            }
        }
    }
}
</script>
<style scoped>
.item-box{
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
}
.item-box img {
    width: 250px;
}
</style>
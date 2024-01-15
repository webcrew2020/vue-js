<template>
   <div class="container">
    <div class="item-box" v-for="pro in proList" v-bind:key="pro.id">
        <h2>{{ pro.title }}</h2>
        <img :src="pro.thumbnail">
        <div>
            <span><del>{{ pro.price }}</del></span>
            <span>{{ pro.discountPercentage }}</span>
        </div>
        <p>{{ pro.description }}</p>
        <router-link :to="'/product/'+pro.id">View</router-link>
    </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"shopComponent",
    data(){
        return {
            url:process.env.VUE_APP_TEST_PATH,
            proList:[]
        }
    },
    mounted(){
        this.getProduct()
    },
    methods:{
        getProduct(){
            axios.get(this.url+'products')
            .then((res)=>{
                console.log(res.data.products)
                this.proList = res.data.products
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

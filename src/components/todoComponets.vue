<template>
<div class="container" v-for="data in list" v-bind:key="data.id">
    <div class="grid">
        <img :src= data.images >
    </div>
</div>       
</template>

<script>
import axios from 'axios'

export default {
    name: "Todo-list",
    data(){
        return {
            list:undefined,
            checkbox:false
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get("https://dummyjson.com/products").then((res)=>{
                this.list = res.data.products
            
        })
    }
    }
}

</script>
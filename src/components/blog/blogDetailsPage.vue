<template>
    <router-link to="/get-blog">Back</router-link>
    <div class="text_data">
        <h1>{{ result.title }}</h1>
        <div v-html="result.dsc"></div>
    </div>
     
</template>
<script>
import axios from 'axios'
export default{
    name:"blogDetailsPage",
    data(){
        return{
            url:process.env.VUE_APP_BASIC_PATH,
            result:""
        }
    },
    async mounted(){
        const id = this.$route.params.id;
            let detail = await axios.get(this.url+'get/'+id)
            this.result = detail.data.data
    }
}
</script>
<style>

</style>
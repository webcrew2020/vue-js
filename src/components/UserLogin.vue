<template>
    <Carousel :autoplay="2000">
      <Slide v-for="slide in details" :key="slide">
        <div class="carousel__item"><img :src="slide"></div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script>
  import axios from 'axios'
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'user-login',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
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
            axios.get(this.url+'products/1')
            .then((res)=>{
                console.log(res.data)
                this.details = res.data.images

            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
  })
  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>
  
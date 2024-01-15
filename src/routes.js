import { createWebHistory , createRouter } from "vue-router";
import UserLogin from './components/UserLogin';
import ProfileComponents from './components/ProfileComponents';
import MyHome from './components/MyHome';
import getBlog from './components/blog/getBlog';
import updateBlog from './components/blog/updateBlog';
import getBlogDetail from './components/blog/blogDetailsPage';
import shopComponent from './components/product/shopComponent';
import productDetailComponent from './components/product/productDetailComponent'

const routes = [
       {
        path:"/",
        component:getBlog
       },
    { 
        path:"/login",
        component:UserLogin, 
    },
    { 
        path:"/profile",
        component:ProfileComponents
    },
    { 
        path:"/home",
        component:MyHome
    },
    { 
        name:'getData',
        path:"/get-blog",
        component:getBlog
    },
    {
        name:"Update",
        path:'/update/:id',
        component:updateBlog
    },
    {
        name:"blogDetailsPage",
        path:'/get/:id',
        component:getBlogDetail
    },
    {
        name:"shopComponent",
        path:'/shop/',
        component:shopComponent,
    },
    {
        path:"/product/:id",
        component:productDetailComponent
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;
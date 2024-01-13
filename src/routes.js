import { createWebHistory , createRouter } from "vue-router";
import UserLogin from './components/UserLogin';
import ProfileComponents from './components/ProfileComponents';
import MyHome from './components/MyHome';
import getBlog from './components/blog/getBlog'
import updateBlog from './components/blog/updateBlog'
import getBlogDetail from './components/blog/blogDetailsPage'

const routes = [
       
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
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;
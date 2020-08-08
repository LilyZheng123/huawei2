import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/Home.vue";
import loginPage from "../components/home/loginPage.vue"


const routes = [
    {
        path:"/",
        component:home
    },
    {
        path:"/login",
        component:loginPage
    }
];

const router = new VueRouter({
    routes:routes
});


export default router;
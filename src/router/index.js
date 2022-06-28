
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home/Home.vue"




const routes = [
    {
        path: "/",
        redirect: 'home',

    },
    {
        path: "/home",
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/userCenter/login/Login.vue')
    },
    {
        path: '/actdetail',
        name: 'Actdetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/act/ActDetail.vue')
    },
]


const router = createRouter({

    history: createWebHistory(),
    routes,
})

export default router

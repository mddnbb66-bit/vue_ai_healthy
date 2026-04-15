import {  createRouter, createWebHistory } from 'vue-router'
import BackendLayout from '@/components/BackendLayout.vue'


const routes = [
    //重定向，不能同一个路由对象不能同时有 component 和 redirect。如果有 redirect，路由器会跳转，不会渲染 component，导致冲突和白屏。
    {
        path:'/',
        redirect:'/back'
    },
    {
        path:'/back',
        component:BackendLayout
    }


] 


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
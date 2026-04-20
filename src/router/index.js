import {  createRouter, createWebHistory } from 'vue-router'
import BackendLayout from '@/components/BackendLayout.vue'
import consultations from '../views/consultations.vue'
import dashboard from '../views/dashboard.vue'
import emotional from '../views/emotional.vue'
import knowledge from '../views/knowledge.vue'
import { iconPropType } from 'element-plus/es/utils/index.mjs'
const routes = [
    //重定向，不能同一个路由对象不能同时有 component 和 redirect。如果有 redirect，路由器会跳转，不会渲染 component，导致冲突和白屏。

    {
        path:'/back',
        component:BackendLayout,
        children:[
            {
                path: 'dashboard',
                component: dashboard,
                meta:{
                    title:'数据分析',
                    icon:'PieChart'
                }
            },
            {
                path: 'consultations',
                component: consultations,
                meta:{
                    title:'咨询记录',
                    icon:'Message'
                    

                }
            },
            {
                path: 'emotional',
                component: emotional,
                meta:{
                    title:'情绪日志',
                    icon:'User'

                }
            },
            {
                path: 'knowledge',
                component: knowledge,
                meta:{
                    title:'知识文章分析',
                    icon:'ChatLineSquare'
                }
            },
                                                
        ]
    }
] 


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
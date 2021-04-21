import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import news from '@/views/news/Home'
import newsDetail from '@/views/newContent/Home'
import role from '@/views/role/Home'
import roleDetail from '@/views/roledetails/Home'
import wallpaper from '@/views/wallpaper/Home'
import image from "@/views/wallpaper/image";
import home from '@/views/HOME/HOME';

export default new VueRouter({
    routes: [
        {
            path:'/',
            component:home
        },
        {
            path: '/home', component: home
        }, {
            path: '/news', component: news
        }, {
            path: '/newsContent', component: newsDetail
        }, {
            path: '/role', component: role
        }, {
            path: '/roledetail', component: roleDetail
        }, {
            path: '/wallpaper', component: wallpaper
        }, {
            path: '/imagePage', component: image
        }
    ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const news = () => import('@/views/news/Home')
const newsDetail = () => import('@/views/newContent/Home')
const role = ()=> import('@/views/role/Home')
const roleDetail = () => import('@/views/roledetails/Home')
const wallpaper = () => import('@/views/wallpaper/Home')
const image = () => import("@/views/wallpaper/image")
const home = () => import('@/views/home/HOME')

export default new VueRouter({
    routes: [
        {
            path:'/',
            component:home,
        },
        {
            path: '/home', component: home
        }, {
            path: '/news', component: news
        }, {
            path: '/newsContent/:listItem/:Content',
            name:'newsContent',
            component: newsDetail
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
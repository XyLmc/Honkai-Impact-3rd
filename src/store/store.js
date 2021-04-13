import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 封面视频地址
        homeVideo:'',
        //封面视频是否显示
        pvAppear:false,
        //list
        getListId:171,
        pageNum:1,
        loading:'查看更多',
        details:'',
        newsActive:0,
        listItem:0,
        listAllItem:[],
        //role
        roleItem:[],
        roleName:'',
        roleSkillNum:[8,14,20,26],
        currentNum:8,
        videoAppear:false,
        videoId:11,
        roleEngName:'',
        roleAllItem:[],
        activeIndex:0,
        //wallpaper
        imageUrl:'',
        NavSelect: 0
    },
    mutations: {
        changeListId(state,value){
            state.getListId=value
        },
        addPageNum(state){
            state.pageNum+=1
        },
        ChangeNav(state,value) {
            state.NavSelect = value
        }
    },
    actions: {
    },
    modules: {
    }
})

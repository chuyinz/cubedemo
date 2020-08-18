import Vue from 'vue'
import Router from 'vue-router'
import CubeTest from "@/components/CubeTest";
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'CubeTest',
            component:CubeTest
        }
    ]
    }
)
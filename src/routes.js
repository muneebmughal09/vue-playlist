import ComponentA from './components/ComponentA.vue'
import Signup from './components/Signup.vue'
import ComponentB from './components/ComponentB.vue'
import OurServices from './components/OurServices.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name :'ComponentA',
        component:ComponentA,
        path:'/'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/sign-up'
    },
    {
        name :'ComponentB',
        component:ComponentB,
        path:'/componentb'
    },
    {
        name:'OurServices',
        component:OurServices,
        path:'/our-services'
    }

]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
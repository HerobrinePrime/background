import VueRouter from 'vue-router'

//components
import HelloWorld from '@/components/HelloWorld'

const router = new VueRouter({
    routes:[
        {
            name:'hello',
            path:'/hello',
            component:HelloWorld,
            meta:{

            },
        },
        {
            path:'*',
            redirect:'/hello'//?
        }
    ]
})
router.beforeEach((to,from,next)=>{
    next()
})

export default router
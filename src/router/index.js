import { createRouter, createWebHistory } from "vue-router";
import { authStore } from '@/store';
// import axios from '@/axios';
const routes = [ 

   

    {
        path: '/',
        name: 'home',
        redirect: '/login'
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/register.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'front-layout'
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/auth/login.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'front-layout'
        },
    },


    {
        path: "/tasks",
        name: "tasks",
        component: () => import("@/views/front/tasks.vue"),
        
        meta: {
            requiresAuth: true,
            layout: 'front-layout'
        },

        children :[
            
            {
                path: '/tasks/active',
                name: 'active',
                component: () => import("@/views/front/tasks.vue")
            },
            {
                path: '/tasks/completed',
                name: 'completed',
                component: () => import("@/views/front/tasks.vue")
            },
            {
                path: '/tasks',
                name: 'all',
                component: () => import("@/views/front/tasks.vue")
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {

    const store = authStore();
    if (to.meta.requiresAuth && !store.getAuthentication) {
        next()
        useToast().error('Veuillez vous connecter pour continuer')
    }else if(to.meta.requiresAuth && store.getAuthentication){
        next()
    }
    else{
        next()
    }
});

export default router;
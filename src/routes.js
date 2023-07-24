import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/userStore'
import { storeToRefs } from 'pinia';
const requireAuth = async (to, from, next) => {

    const userStore = useUserStore();
    let { loadingSession } = storeToRefs(userStore)
    const user = await userStore.currentUser()
    loadingSession = true;
    if(!user){
        next('/login');
    }
    else{
        next()
    }
    loadingSession = false;
}
const routes = [
    {
        name:'Home',
        path:'/home',
        component: () => import('./Views/Home.vue'),
        beforeEnter: requireAuth 
    },
    {
        name:'Register',
        path:'/sign-up',
        component: () => import('./Views/Register.vue')
    },
    {
        name:'Login',
        path:'/login',
        component: () => import('./Views/Login.vue')
    }
]


const router = createRouter({
    routes, 
    history: createWebHistory()
})
export default router;
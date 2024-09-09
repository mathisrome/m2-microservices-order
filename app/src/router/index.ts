import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import {useAuthStore} from "@/stores/auth";
import {computed} from "vue";
import MenuView from "@/views/MenuView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuView
        },
    ]
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    const user = computed(() => authStore.user)
    await authStore.fetchProfile()

    if (to.name !== 'login' && user.value === null) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router

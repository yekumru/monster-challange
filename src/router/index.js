import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import dashboard from './routes/dashboard'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        { path: '/', redirect: { name: 'index' } },
        ...dashboard,
        {
            path: '*',
            redirect: 'error-404',
        },
    ],
})

router.beforeEach((to, _, next) => {
    const isLoggedIn = isUserLoggedIn()

    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
        const userData = getUserData()
        next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
    }

    return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})

export default router
import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import ErrorPage from './components/ErrorPage.vue';

import store from './store.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    name: 'error',
                    path: 'error',
                    component: ErrorPage
                }
            ]
        },
        {
            path: '/login',
            component: LoginPage
        }
    ]
});

router.beforeEach((to, _, next) => {

    if(to.name==='home' && !store.getters.isAuthenticated) {
        return next('/login');
    } else {
        next();
    }
})

export default router;
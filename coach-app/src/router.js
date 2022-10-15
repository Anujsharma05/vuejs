import { createRouter, createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/CoachList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import ContactCoach from './pages/coaches/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestList from './pages/requests/RequestList.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            name: 'coaches',
            path: '/coaches',
            component: CoachList,
        },
        {
            name: 'coach',
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    name: 'contact',
                    path: 'contact',
                    component: ContactCoach,
                    props: true
                }
            ]
        },
        {
            name: 'requests',
            path: '/requests',
            component: RequestList
        },
        {
            name: 'auth',
            path: '/auth',
            component: UserAuth
        },
        {
            name: 'register',
            path: '/register',
            component: CoachRegistration
        }
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
});

export default router;
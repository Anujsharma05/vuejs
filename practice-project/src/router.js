import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachContact from './pages/coaches/CoachContact.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestsList from './pages/requests/RequestsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: 'contact',
                    component: CoachContact,
                    props: true
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration
        },
        {
            path: '/requests',
            component: RequestsList
        },
        {
            path: '/:notFound(.*)',
            redirect: '/'
        }
    ],
    linkActiveClass: 'active'
});

export default router;

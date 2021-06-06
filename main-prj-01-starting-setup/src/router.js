import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';


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
            component: CoachesList,
        },
        {
            name: 'coachDetail',
            path: '/coaches/:id',
            props: true,
            component: CoachDetail,
            children: [
                {
                    name: 'contactCoach',
                    path: 'contact',
                    component: ContactCoach,
                    // props: true
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration
        },
        {
            name: 'requests',
            path: '/requests',
            component: RequestsReceived
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})

export default router;
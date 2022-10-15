// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ResumeForm from './pages/ResumeForm.vue';
import WorkHistory from './pages/WorkHistory.vue';
import WorkSkills from './components/work-skills/WorkSkills.vue';
// import BasicInfoForm from './components/BasicInfoForm.vue';

const BasicInfoForm = () => import('./components/BasicInfoForm.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: HomePage
        },
        {
            name: 'form',
            path: '/form',
            component: ResumeForm,
            children: [
                {
                    name: 'basic-info',
                    path: 'info',
                    component: BasicInfoForm
                },
                {
                    name: 'work-history',
                    path: 'work-history',
                    component: WorkHistory
                },
                {
                    name: 'work-skill',
                    path: 'work-skill',
                    component: WorkSkills
                }
            ]
        },
        {
            path: '/:notFound(.*)',
            redirect: '/home'
        }
    ]
});

export default router;
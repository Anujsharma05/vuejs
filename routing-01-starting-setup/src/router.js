import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            // alias: '/'
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                }
            ]
        },
        {
            path: '/users',
            meta: {
                needsAuth: true
            },
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('routes level beforeEnter')
                console.log(to, from);
                next();
            }
        },
        {
            path: '/:notfound(.*)',
            component: NotFound
            // redirect: '/'
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior( _ , _2 , savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next) {
    console.log('global before each')
    console.log(to, from);
    next();
    
    // if(to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2'}});
    // }
});

export default router;
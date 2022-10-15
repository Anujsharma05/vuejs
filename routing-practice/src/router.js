import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/TeamsList.vue';
import UsersList from './components/UsersList.vue';
import TeamMember from './components/TeamMember.vue';
import Footer from './components/Footer.vue';

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
            // component: TeamsList,
            components: {
                default: TeamsList,
                footer: Footer
            },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMember,
                    props: true
                },
            ],
            meta: {
                needsAuth: true
            }
        },
        {
            name: 'users',
            path: '/users',
            // component: UsersList
            components: {
                default: UsersList,
                footer: Footer
            },
            // beforeEnter(to, from, next) {
            //     console.log('before entering users route')
            //     console.log(to);
            //     console.log(from);
            //     console.log(next);
            // }
        },
        {
            path: '/:notFound(.*)',
            redirect: '/teams'
        }
    ],
    linkActiveClass: 'active-route',
    linkExactActiveClass: 'exact-active-route',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0 };
    }
})

// router.beforeEach( (to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log(next);

//     next();
//     if(to.name === 'users') {
//         next({name: 'team-members', params: {teamId: 't2'}})
//     } else {
//         next();
//     }
// })

// router.afterEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log(next);
// })

export default router;
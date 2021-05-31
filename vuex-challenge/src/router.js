import { createRouter, createWebHistory } from  'vue-router'

import ProductList from './pages/ProductList.vue';
import CartView from './pages/CartView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/products'
        },
        {
            name: 'products',
            path: '/products',
            component: ProductList
        },
        {
            name: 'cart',
            path: '/cart',
            component: CartView
        },
        {
            path: '/:notFound(.*)',
            redirect: '/products'
        }
    ],

});

export default router;
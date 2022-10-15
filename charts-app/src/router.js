import { createRouter, createWebHistory } from 'vue-router';

import ChartSelector from './components/ChartSelector.vue';
import LineChart from './components/LineChart.vue';
import PieChart from './components/PieChart.vue';
import BarChart from './components/BarChart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ChartSelector,
            children: [
                {
                    path:'page-views',
                    component: LineChart
                },
                {
                    path: 'category-views',
                    component: PieChart
                },
                {
                    path: 'new-vs-returning',
                    component: BarChart
                }
            ]
        }
    ]
});

export default router;
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            result: null,
            dataReady: false
        }
    },
    mutations: {
        chartData(state, payload) {
            state.result = payload;
            state.dataReady = true;
        }
    },
    actions: {
        async chartData(context) {
            const response = await fetch("chart-data.json");
            const responseData = await response.json();

            context.commit('chartData', responseData);
            return responseData;            
        }
    },
    getters: {
        dataReady(state) {
            return state.dataReady;
        },
        pageViews(state) {
            return state.result.pageViews;
        },
        pageViewsByCategory(state) {
            return state.result.pageViewsByCategory;
        },
        newVsReturning(state) {
            return state.result.newVsReturning;
        }
    }
});

export default store;
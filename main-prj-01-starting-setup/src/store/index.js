import { createStore } from 'vuex';

import CoachModule from './modules/coaches.js';
import RequestModule from './modules/requests.js';

const store = createStore({
    modules: {
        coaches: CoachModule,
        requests: RequestModule
    },
    state() {
        return {
            userId: 'c1'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})

export default store;
import { createStore } from 'vuex';

import CoachesModule from './modules/coaches.js';
import RequestsModule from './modules/requests.js';

const store = createStore({
    modules: {
        coaches: CoachesModule,
        requests: RequestsModule
    },
    state() {
        return {
            userId: 'c2'
        }
    },
    getters: {
        coachId(state) {
            return state.userId;
        }
    }
});

export default store;
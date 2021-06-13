import { createStore } from 'vuex';

import CoachesModule from './modules/coaches.js';

const store = createStore({
    modules: {
        coaches: CoachesModule
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
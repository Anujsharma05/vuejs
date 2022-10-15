import { createStore } from 'vuex';

import counter from './counter/index.js';
import test from './test/index.js';

const store = createStore({
    modules: {
        numbers: counter,
        testing: test
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    getters: {
        loginStatus(state) {
            return state.isLoggedIn;
        }
    }
});

export default store;
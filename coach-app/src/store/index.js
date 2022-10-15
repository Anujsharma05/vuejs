import { createStore } from 'vuex';

import authStore from './modules/auth/index.js';
import coachStore from './modules/coaches/index.js';
import requestStore from './modules/requests/index.js';

const store = createStore({
    modules: {
        auth: authStore,
        coaches: coachStore,
        requests: requestStore
    },
});

export default store;
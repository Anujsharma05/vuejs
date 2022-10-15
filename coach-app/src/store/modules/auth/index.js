import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const authStore = {
    state() {
        return {
            token: '',
            userId: ''
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default authStore;
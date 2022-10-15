const test = {
    namespaced: true,
    state() {
        return {
            testOne: 'helo'
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        testOne(state) {
            return state.testOne;
        }
    }
}

export default test;
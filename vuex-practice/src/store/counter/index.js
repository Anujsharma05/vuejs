export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload.num;
        },
        decrement(state, payload) {
            state.counter -= payload.num;
        }
    },
    actions: {
        increment(context, payload) {
            console.log(context);
            context.commit('increment', payload);
        },
        decrement(context, payload) {
            context.dispatch('testAction');
            context.commit('decrement', payload);
        },
        testAction(context) {
            console.log('inside test action');
            console.log(context);
        }
    },
    getters: {
        fastCounter(state) {
            return state.counter * 2;
        },
        counter(state, otherGetters) {
            console.dir(otherGetters.fastCounter);
            return state.counter;
        }
    }
}
export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        addRequest(state, payLoad) {
            state.requests.push(payLoad);
        }
    },
    actions: {
        addRequest(context, request) {
            const newRequest = {
                id: new Date().toISOString,
                coachId: request.coachId,
                userEmail: request.email,
                userMessage: request.message
            }

            context.commit('addRequest', newRequest);
        }
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const coachId = rootGetters.userId;
            return state.requests.filter(req => req.coachId === coachId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        }
    }
}
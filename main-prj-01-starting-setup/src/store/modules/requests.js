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
        },
        setRequests(state, payLoad) {
            state.requests = payLoad;
        }
    },
    actions: {
        async addRequest(context, request) {
            const newRequest = {
                userEmail: request.email,
                userMessage: request.message
            }

            const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/requests/${request.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest),
                'content-type': 'application/json'
            });

            const responseData = await response.json();

            if(!response.ok) {
                const error = new Error(response.message || 'failed to send request');
                throw error;
            }

            newRequest.id = responseData.name;
            newRequest.coachId = request.coachId;

            context.commit('addRequest', newRequest);
        },
        async fetchRequests(context) {
            const coachId = context.rootGetters.userId;
            const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/requests/${coachId}.json`);

            const responseData = await response.json();

            if(!response.ok) {
                const error = new Error(response.message || 'failed to fetch requests');
                throw error;
            }

            const requests = [];

            for(const key in responseData) {
                
                const request = {
                    id: key,
                    coachId: coachId,
                    userEmail: responseData[key].userEmail,
                    userMessage: responseData[key].userMessage
                }
                requests.push(request);
            }

            context.commit('setRequests', requests);
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
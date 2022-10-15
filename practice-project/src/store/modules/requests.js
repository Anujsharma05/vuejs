export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        },
        updateRequests(state, requests) {
            state.requests = requests;
        }
    },
    actions: {
        async addRequest(_, payload){
            const response  = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
                method: 'POST',
                'content-type': 'application/json',
                body: JSON.stringify({
                    email: payload.userEmail,
                    message: payload.message
                })
            });

            if(!response.ok) {
                //error
            }
        },
        async fetchRequests(context) {
           const coachId = context.rootGetters.coachId;

           const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/requests/${coachId}.json`);

           if(!response.ok) {
               const error = new Error('Unable to fetch requests. Please try again later');
               throw error;
           }

           const responseData = await response.json();
           
           const requests = [];

           for(const key in responseData) {
                const request = {
                    email: responseData[key].email,
                    message: responseData[key].message
                }

                requests.push(request);
           }

           context.commit('updateRequests', requests);
        }
    },
    getters: {
        requests(state) {
            return state.requests;
        },
        hasRequests(_, otherGetters) {
            return otherGetters.requests.length > 0;
        }
    }
}
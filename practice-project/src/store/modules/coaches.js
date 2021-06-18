export default {
    namespaced: true,
    state() {
        return {
            coaches: [],
            lastFetchedTime: null
        }
    },
    mutations: {
        addCoach(state, payload) {
            state.coaches.push(payload);
        },
        updateCoaches(state, payload) {
            state.coaches = payload;
            state.lastFetchedTime = new Date().getTime();
        }
    },
    actions: {
        async registerCoach(context, coach) {
            const coachId = context.rootGetters.coachId;
    
            const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/coaches/${coachId}.json`, {
                method: 'PUT',
                'content-type': 'application/json',
                body: JSON.stringify(coach)
            });

            if(!response.ok) {
                //error
            }

            context.commit('addCoach', {
                ...coach,
                id: coachId
            });
        },
        async fetchCoaches(context, forceFetch) {

            const allowFetching = context.getters.allowFetching;

            if(!allowFetching && !forceFetch) {
                return;
            }

            const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/coaches.json`);
          
            if(!response.ok) {
                const error = new Error('Unable to fetch coaches. Please try again later');
                throw error;
            }

            const responseData = await response.json();
        
            const coaches = [];

            for(const key in responseData) {
                const coach = {
                    id: key,
                    firstname: responseData[key].firstname,
                    lastname: responseData[key].lastname,
                    desc: responseData[key].desc,
                    rate: responseData[key].rate,
                    areas: responseData[key].areas
                }
                coaches.push(coach);
            }
            
            context.commit('updateCoaches', coaches);
        }
    },
    getters: {
        coaches(state) {
            return state.coaches;
        },
        allowFetching(state) {
            const lastFetch = state.lastFetchedTime;
            if(!lastFetch) {
                return true;
            }

            const currentTime = new Date().getTime();

            return (currentTime - lastFetch)/1000 > 60;
        }
    }
}
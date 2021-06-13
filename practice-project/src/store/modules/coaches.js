export default {
    namespaced: true,
    state() {
        return {
            coaches: []
        }
    },
    mutations: {
        addCoach(state, payload) {
            state.coaches.push(payload);
        },
        updateCoaches(state, payload) {
            state.coaches = payload;
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
        async fetchCoaches(context) {
            const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/coaches.json`);

            if(!response.ok) {
                //error
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
        }
    }
}
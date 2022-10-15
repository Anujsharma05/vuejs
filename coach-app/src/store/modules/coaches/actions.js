export default {
    async fetchCoaches(context) {
        const url = 'https://find-coach-c4c6b-default-rtdb.firebaseio.com/coaches.json';
        
        const response = await fetch(url);

        if (!response.ok) {
            console.log(response);
            throw new Error(response.message || 'failed to fetch coaches');
        }

        const responseData = await response.json();

        const coaches = [];
        
        for (const coachId in responseData) {

            const dataWrapper = responseData[coachId];
            const innerkey = Object.keys(dataWrapper)[0];
           
            const coach = {
                id: coachId,
                areas: dataWrapper[innerkey].areas,
                firstName: dataWrapper[innerkey].firstName,
                lastName: dataWrapper[innerkey].lastName,
                hourlyRate: dataWrapper[innerkey].hourlyRate,
                description: dataWrapper[innerkey].description
            }

            coaches.push(coach);
        }

        context.commit('refreshCoachesData', coaches);

    },
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const url = `https://find-coach-c4c6b-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`;

        const params = {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({
                ...payload
            })
        }
        const response = await fetch(url, params);

        if (!response.ok) {
            throw new Error(response.message || 'error while registering');
        }

        const coach = {
            id: userId,
            ...payload
        }

        context.commit('registerCoach', coach);
    },
}
export default {
    async sendMessage(_, payload) {
        const coachId = payload.coachId;

        const url = `https://find-coach-c4c6b-default-rtdb.firebaseio.com/requests/${coachId}.json`;

        const params = {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({
                userEmail: payload.email,
                message: payload.message
            })
        }

        const response = await fetch(url, params);

        if(!response.ok) {
            throw new Error(response.message || 'send message failed');
        }

        //TODO save response in store
        console.log(response);
        
    },
    async fetchRequests(context) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const url = `https://find-coach-c4c6b-default-rtdb.firebaseio.com/requests/${userId}.json?auth=${token}`;

        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(response.message || 'fetching requests failed');
        }

        const responseData = await response.json();

        const requests = [];

        for(const key in responseData) {
            const request = {
                id: key,
                message: responseData[key].message,
                userEmail: responseData[key].userEmail
            }

            requests.push(request);
        }

        context.commit('storeRequests', requests);
    }
}
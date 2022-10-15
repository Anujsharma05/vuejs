import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isAuthenticated: false,
            token: null,
            text: 'f'
        }
    },
    mutations: {
        successToken(state, token) {
            state.token = token;
            state.isAuthenticated = true;
        },
        setText(state, text) {
            state.text = text;
        }
    },
    actions: {
        async submitForm(context, payload) {

            const url = `http://localhost:8080/authentication`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if(response.ok) {
                const responseData = await response.json();
                context.commit('successToken', responseData.jwt);
            } else {
                console.log('failed');
                console.log(response);
            }
        },
        async helloWorld(context) {
            
            const url = `http://localhost:8080/hello`;

            const token = context.getters.jwtToken;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if(response.ok) {
                response.text().then(str => context.commit('setText', str));
            }
        }

    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        jwtToken(state) {
            return state.token;
        },
        text(state) {
            return state.text;
        }
    }
});

export default store;
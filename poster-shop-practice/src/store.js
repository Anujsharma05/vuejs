import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            items: null
        }
    },
    mutations: {
        shopItems(state, payload) {
            state.items = payload;
        }
    },
    actions: {
        async shopItems(context) {
            const url = "./posters.json";
            const response = await fetch(url);

            if (response.ok) {
                try {
                    let items = await response.json();
                    context.commit('shopItems', items);
                } catch (error) {
                    console.log("error occurred");
                    console.log(error.message);
                }
            }
        }
    },
    getters: {
        items(state) {
            return state.items;
        }
    }
})

export default store;
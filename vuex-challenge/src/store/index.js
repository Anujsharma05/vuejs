import { createStore } from 'vuex';

import productModule from './products/index.js';
import cartModule from './cart/index.js';

const store = createStore({
    modules: {
      products: productModule,
      cart: cartModule
    },
    state() {
        return {
            isLoggedIn: false,
            
        }
    }
})

export default store;
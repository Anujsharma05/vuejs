export default {
    cartItems(state) {
        return state.cart.items;
    },
    totalQuantity(state) {
        return state.cart.quantity;
    },
    totalPrice(state) {
        return state.cart.total;
    }
}
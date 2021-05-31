export default {
    addItem(state, product) {
        const id = product.id;
        // const price = product.price;

        const cartItems = state.cart.items;
        state.cart.quantity++;
        state.cart.total += product.price;
        
        const index = cartItems.findIndex(item => item.id === id);
        
        if(index == -1) {

            const item = {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                total: product.price
            }
            cartItems.push(item);
        } else {
            const alreadyPresentItem = cartItems[index];
            alreadyPresentItem.quantity++;
            let total = alreadyPresentItem.price * alreadyPresentItem.quantity;
            alreadyPresentItem.total = total.toFixed(2);
        }
        
    },
    removeItem(state, item) {

        const cartItems = state.cart.items;
        
        const index = cartItems.findIndex(cartItem => cartItem.id === item.id);

        cartItems.splice(index, 1);
        
        state.cart.total = state.cart.total - item.total;
        state.cart.quantity = state.cart.quantity - item.quantity;

    }
}
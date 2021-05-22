<template>
  <div>
    <h2>Shopping Cart</h2>
    <p v-if="isListEmpty">No Items in the Cart</p>
    <div v-else>
        <ul class="cart-list">
            <li v-for="cartItem in cartList" :key="cartItem.id">
                <span>{{ cartItem.title}}</span>
                <div>
                    <span>{{ cartItem.price }} x {{ cartItem.quantity }}</span>
                    <div class="quantity-buttons">
                        <button type="button" @click="$emit('increment-quant', cartItem.id)">+</button>
                    <button type="button" @click="$emit('decrement-quant', cartItem.id)">-</button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="total-price">
            <span>Total: ${{ totalAmount }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    emits: ['increment-quant', 'decrement-quant'],
    props: {
        cartList: {
            type: Array,
            required: false
        }
    },
    computed: {
        totalAmount() {
            let total = 0;
            if(this.cartList.length > 0) {
                let totalPrice = 0;
                this.cartList.forEach(item => {
                    totalPrice = totalPrice + item.price*item.quantity;
                    total = totalPrice.toFixed(2);
                })
            }
            return total;
        },
        isListEmpty: function() {
            if(this.cartList.length > 0) {
                return false;
            }

            return true;
        }
    }
}
</script>

<style scoped>

div > h2 {
    margin: 0;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
}

.cart-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.cart-list li {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid grey;
    gap: 0.5rem;
}

.cart-list .quantity-buttons {
    display: inline-block;
    margin-left: 1rem;
}

.quantity-buttons button {
  margin: 0.2rem;
padding: 0.2rem 0.5rem;
}

.quantity-buttons button:last-of-type {
    padding: 0.2rem 0.6rem;
}

.total-price {
    text-align: right;
}
</style>
<template>
  <header>
    <h1>
        <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <span class="nav-link">
        <router-link to="/products">Products</router-link>
      </span>
      <span class="nav-link">
        <router-link to="/cart">Cart</router-link>
        <span class="cart-count">{{ cartCount }}</span>
      </span>
      
    </nav>

    <button class="login">Login</button>
  </header>
</template>

<script>
export default {
  computed: {
    cartCount() {
      return this.$store.getters['cart/totalQuantity'];
    }
  }
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}

a {
    text-decoration: none;
    color: #333;;
}

a:hover {
     border-bottom: 2px solid var(--main-color);
    color: var(--main-color);
}

.nav-link {
    display: inline-block;
    padding: 1rem;
}

.nav-link a {
    font-weight: bold;
    font-size: 1.2rem;
}

.cart-count {
    margin: 0.5rem;
    background: var(--main-color);
    padding: 0.2rem 1.3rem;
    border-radius: 1rem;
    color: white;
}

.login {
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background: white;
    font-size: 1.3rem;
    cursor: pointer;
}

.login:hover {
    background: var(--focus-color);
}

.router-link-active {
    border-bottom: 2px solid var(--main-color);
    color: var(--main-color);
}
</style>
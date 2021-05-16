<template>
  <div class="order-form">
    <div>
      <the-header></the-header>
      <service-list :services="services" @total-price="totalPrice = $event"></service-list>
      <the-footer :total="totalPrice"></the-footer>
    </div>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader'
  import ServiceList from './components/ServiceList'
  import TheFooter from './components/TheFooter'

  export default {
    components: {
      TheHeader,
      ServiceList,
      TheFooter
    },
    data: function() {
      return {
        services: [
        {
          id: 1,
          name: 'Web Development',
          price: 300.00
        },
        {
          id: 2,
          name: 'Design',
          price: 400.00
        },
        {
          id: 3,
          name: 'Integration',
          price: 250.00
        },
        {
          id: 4,
          name: 'Training',
          price: 220.00
        }
      ],
      totalPrice: 0
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  } 
  body {
    margin: 0;
    color: white;
  }

  .order-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .order-form > div{
    background: #61a1bc;
    width: 40%;
    min-width: 540px;
    padding: 0 4rem;
  }
</style>
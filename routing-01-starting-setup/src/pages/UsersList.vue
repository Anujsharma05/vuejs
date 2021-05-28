<template>
  <button @click="routeProgrammatically">Switch to Teams</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    routeProgrammatically() {
      // this.$router.push('/teams');

      this.$router.push({ name: 'teams' });
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('component level beforeRouteEnter')
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userslist beforeRouteLeave');
    console.log(to, from);
    if(this.changesSaved) {
      next();
    } else {
      const userWantToLeave = confirm('Are you sure? Some changes are unsave!');
      next(userWantToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to t2</router-link>
    <router-link to="/teams/t3">Go to t3</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  props: ['teamId'],
  inject: ['users', 'teams'],
  methods: {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId;
      if(teamId) {
        const selectedTeam = this.teams.find((team) => team.id === teamId);

      const teamMembers = selectedTeam.members;

      const selectedUsers = [];
      for (const member of teamMembers) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedUsers.push(selectedUser);
      }

      this.teamName = selectedTeam.name;
      this.members = selectedUsers;
      }
    },
  },
  created() {
    // console.log(this.$route);
    this.loadTeamMembers(this.teamId);

    // console.log(this.$route.query.sort)
  },
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers beforeRouteUpdate');
    console.log(to, from);
    next();
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
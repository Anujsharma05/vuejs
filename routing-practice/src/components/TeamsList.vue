<template>
  <h3>Teams list component</h3>
  <router-link :to="teamT1">from outer to t1</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "TeamsList",
  data() {
    return {
      teamT1: {
        name: "team-members",
        params: {
          teamId: "t1",
        },
      },
    };
  },
  created() {
    // console.log(this.$route);
  },
//   beforeRouteLeave(to, from, next) {
//     console.log("route leave teams");
//     console.log(to);
//     console.log(from);
//     console.log(next);
//     next(false);
//   }
};
</script>
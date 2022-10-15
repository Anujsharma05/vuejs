<template>
    Team member component
    <router-link to="/teams/t2">go to t2</router-link>
    <router-link to="/teams/t1">go to t1</router-link>
    {{ teamId }}
</template>

<script>
export default {
    name: 'TeamMember',
    props: ['teamId'],
    created() {
            console.log('team member method created')
            console.log(this.$route.params);
            console.log(this.teamId);
        },
        beforeRouteUpdate(to, from, next) {
            console.log('inside before update')
            console.log(to);
    console.log(from);
    console.log(next);
    next();
        }
}
</script>
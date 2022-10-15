<template>
    <div>
        <h3>Users list component</h3>
        <button @click="toTeams">Go to Teams</button>

        <div>
            <TeamMember teamId="myOwn"></TeamMember>
        </div>
    </div>
</template>

<script>
import TeamMember from './TeamMember.vue';
export default {
    name: 'UsersList',
    components: {
        TeamMember
    },
    methods: {
        toTeams() {
            // this.$router.push('/teams');
            this.$router.push({ name: 'teams', params: { param1: 'p1', param2: 'p2'}, query: { sort: 'asc', pageNo: 1 } })
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     console.log('inside users component')
    //     console.log(to);
    // console.log(from);
    // console.log(next);
    // next(false);
    // }
}
</script>

<style scoped>
div {
    border: 1px solid black;
}
</style>
export default {
    refreshCoachesData(state, coaches) {
        state.coaches = coaches;
    },
    registerCoach(state, coach) {
        state.coaches.push(coach);
    },

}
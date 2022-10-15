export default {
    coaches(state) {
        return state.coaches;
    },
    isCoach(state, _, _2, rootGetters) {
        const coaches = state.coaches;
        return coaches.some(coach => coach.id === rootGetters.userId);
    },
   
}
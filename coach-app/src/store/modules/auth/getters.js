export default {
    token(state) {
        return state.token;
    },
    userId(state) {
        return state.userId;
    },
    isAuthenticated(_, otherGetters) {
        return !!otherGetters.token;
    }
}
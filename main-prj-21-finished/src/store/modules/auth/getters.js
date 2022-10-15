export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        //sending boolean value whether token exists or not
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
}
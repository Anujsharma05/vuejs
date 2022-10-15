export default {
    login(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
    },
    autoLogin(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
    },
    logout(state) {
        state.token = '';
        state.userId = '';
    },
    dummyMethod() {
        console.log('dummy method mutate');
    }
}
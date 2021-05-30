export default {
    increment(state) {
        state.counter++;
    },
    increase(state, payLoad) {
        state.counter += payLoad.obj.num;
    },
}
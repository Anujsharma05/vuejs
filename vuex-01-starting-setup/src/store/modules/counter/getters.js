export default {
    counterValue(state) {
        return state.counter;
    },
    finalCounter(state) {
        return state.counter * 2;
    },
    normalizedCounter(state, otherGetters) {

        const finalCounter = otherGetters.finalCounter;

        if(finalCounter < 0) {
            return 0;
        } else if(finalCounter > 100) {
            return 100;
        } else {
            return finalCounter;
        }
    }
}
export default {
    increment(context) {
        context.commit('increment');
    },
    increase(context, payLoad) {
        setTimeout(function() {
            context.commit('increase', payLoad);
        }, 2000);
    },
}
export default {
    addItem(context, payLoad) {
       context.commit('addItem', payLoad.product);
    },
   removeItem(context, payLoad) {
       context.commit('removeItem', payLoad);
   }
}
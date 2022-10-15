const vm1 = Vue.createApp({
    data() {
        return {
            name: 'one'
        }
    },
    methods: {
        updateFromOne: function() {
            vm2.name = 'update from one';
        }
    },
    mounted() {
        console.log('mounted');
        console.log(this.$el);
    },
    beforeMount: function() {
        console.log('before mount');
        console.log(this.$el);
    },
    created() {
        console.log('created');
        console.log(this.$el);
    },
    beforeCreate: function() {
        console.log('before create');
        console.log(this.name);
    }
   });

   vm1.mount('#app1')

//    setTimeout(function() {
//        vm1.name = 'one updated from vanilla js';
//        vm2.name= 'two update from vanilla js';
//    }, 3000);

   const vm2 = Vue.createApp({
    data: function(){
        return {
        name: 'two' 
    }
    },
    methods: {
        updateFromTwo: function() {
            console.log(vm1.$data)
            vm1.name = 'update from two';
        }
    }
   });

   vm2.mount('#app2');
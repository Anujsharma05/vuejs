Vue.createApp({
    data() {
       return {
           goal: '',
           goals: [],
           selectRed: false,
           name: '',
           counter: 0
       }
    },
    methods: {
        addGoal() {
            if(this.goal != '') {
                this.goals.push(this.goal);
                this.goal = '';
                this.selectRed = !this.selectRed;
            }
        },
        myMethod(event) {
            // console.log(event.target.value);
            this.name = event.target.value;
        },
        resetName() {
            this.name = '';
        }
    },
    computed: {
        //works like data property and calculate output value dynamically and return it

        changeColor() {
            return {
                red: this.selectRed,
                blue: !this.selectRed
            }
        },
        headingColor() {
            return {
                color: 'magenta'
            }
        }
    },
    watch: {
        // watch a property and perform certain tast. Works like method

        counter(value) {
            if(value > 5) {
                //reset counter
                this.counter = 0;
            }
        }

        // name(newVal, oldVal) {
        //     console.log('new value: ' + newVal);
        //     console.log('old value: ' + oldVal);
        // }
    }
}).mount('#app');
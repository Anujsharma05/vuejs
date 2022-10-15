Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        }
    },
    methods: {
        showAlert() {
            alert('task 1 working fine');
        },
        taskTwo(event) {
            this.output1 = event.target.value;
        },
        taskThree(event) {
            this.output2 = event.target.value;
        }
    }
}).mount('#assignment');
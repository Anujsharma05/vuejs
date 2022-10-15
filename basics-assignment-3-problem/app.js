Vue.createApp({
    data() {
        return {
            num: 0
        }
    },
    methods: {
        addOne() {
            this.num+=1;
        },
        addFive() {
            this.num+=5;
        }
    },
    computed: {
        result() {
            if(this.num < 37) {
                return 'Not there yet';
            } else if(this.num > 37) {
                return 'Too much!';
            } else {
                return this.num;
            }
        }
    },
    watch: {
        result() {
            console.log('inside result')
            const that = this;

            setTimeout(function() {
                that.num = 0;
            }, 5000)
        }
    }
}).mount('#assignment');
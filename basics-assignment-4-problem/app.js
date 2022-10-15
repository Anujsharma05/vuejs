Vue.createApp({
    data() {
        return {
            enteredClass: '',
            bgColor: '',
            isVisible: true
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        dynamicClass() {
            if(this.enteredClass === 'user1') {
                return {
                    user1: true
                }
            } else if(this.enteredClass === 'user2') {
                return {
                    user2: true
                }
            }
        },
        visibility() {
            return {
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        }
    }
}).mount('#assignment');
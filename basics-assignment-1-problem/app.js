Vue.createApp({
data() {
    return {
        name: 'Anuj Sharma',
        age: 25,
        url: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png',
    }
},
methods: {
    generateRandomNum() {
        console.log('inside random gen')
        return Math.random();
    },
    ageAfterFiveYears() {
        return this.age + 5;
    }
}
}).mount('#assignment');
// const input = document.querySelector('input');
// const submit = document.querySelector('button');
// const listUl = document.querySelector('ul');
// submit.addEventListener('click', function() {
//     const li = document.createElement('li');
//     li.textContent = input.value;
//     listUl.appendChild(li);

//     input.value = '';
// })

Vue.createApp({
    data() {
       return {
           goal: '',
           goals: []
       }
    },
    methods: {
        addGoal() {
            this.goals.push(this.goal);
            this.goal = '';
        }
    }
}).mount('#app');

// vm.mount('#app');
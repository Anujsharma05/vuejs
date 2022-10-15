<template>
    <section class="container">
        <h2>{{ user.name }}</h2>
        <h3>{{ user.age}}</h3>
        <button @click="changeAge">Change Age</button>
    </section>
</template>

<script>
    import { reactive } from 'vue';

    export default {
        setup() {
            const user = reactive({
                name: 'Anuj',
                age: 43
            });

            function setUserAge() {
                user.age = 26;
            }

            return {
                user: user,
                changeAge: setUserAge
            }
        }
    }
</script>
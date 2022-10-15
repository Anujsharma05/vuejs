<template>
    <h2>Login page</h2>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">Username</label><br>
            <input type="text" id="username" v-model="username" />
        </div>
        <div>
            <label for="password">Password</label><br>
            <input type="password" id="password" v-model="password" />
        </div>

        <button type="submit">Login</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            async submitForm() {
                if(this.username === '' || this.password === '') {
                    return;
                }

               await this.$store.dispatch('submitForm', { username: this.username, password: this.password });

                // const isAuthenticated = this.$store.getters.isAuthenticated;

                this.$router.push('/');

            }
        }
    }
</script>
<template>
    <section class="container">
        <h2>{{ username }}</h2>

        <div>
            <!-- <input type="text" placeholder="First Name" @input="setFirstname" />
            <input type="text" placeholder="Last Name" @input="setLastname" />  -->

            <input type="text" placeholder="First Name" v-model="firstname" />
            <input type="text" placeholder="Last Name" v-model="lastname" /> 
        </div>
    </section>
</template>

<script>
    import { computed, ref, isRef } from 'vue';

    export default {
        setup() {
            const firstname = ref('');
            const lastname = ref('');

            // function setFirstname(event) {
            //     firstname.value = event.target.value;
            // }

            // function setLastname(event) {
            //     lastname.value = event.target.value;
            // }

            const username = computed(function() {
                return firstname.value + ' ' + lastname.value;
            })

            // ! computed property can be read but not write
            // console.log(username.value);

            // * computed property is a ref
            console.log(isRef(username));

            return {
                username,
                firstname,
                lastname
                // setFirstname: setFirstname,
                // setLastname: setLastname,
                
            }
        }
    }
</script>
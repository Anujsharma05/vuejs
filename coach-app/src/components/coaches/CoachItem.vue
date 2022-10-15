<template>
    <li class="coach-item">
        <h2> {{ fullName }}</h2>
        <h3> ${{ coach.hourlyRate }}/hour</h3>
        <ul>
            <li v-for="(area, index) in coach.areas" :key="index">
                {{ area }}
            </li>
        </ul>
        <section>
            <button-link link :to="contactLink">Contact</button-link>
            <button-link link :to="detailsLink">View Details</button-link>
        </section>
    </li>
</template>

<script>
    export default {
        props: {
            coach: {
                type: Object,
                required: false
            }
        },
        computed: {
            fullName() {
                if(this.coach) {
                    return this.coach.firstName + ' ' + this.coach.lastName;
                }

                return '';
            },
            detailsLink() {
                return {
                    name: 'coach',
                    params: {
                        id: this.coach.id
                    }
                };
            },
            contactLink() {
                return {
                    name: 'contact',
                    params: {
                        id: this.coach.id
                    },
                    query: {
                        formView: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .coach-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem 0;
    }

    h2, h3 {
        margin: 0;
    }

    ul {
        padding: 0;
        list-style: none;
    }
</style>
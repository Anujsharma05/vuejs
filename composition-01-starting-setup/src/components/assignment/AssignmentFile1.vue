<template>
   <!-- <section>
        <h2>My course goal</h2>
        <h3 v-if="isVisible">{{ courseGoal }}</h3>
        <button @click="toggleGoal">Toggle Goal</button>
   </section> -->

   <!-- <section>
        <h2>My course goal</h2>
        <h3 v-if="course.isVisible">{{ course.goal }}</h3>
        <button @click="toggleGoal">Toggle Goal</button>
   </section> -->

   <!-- <section>
        <h2>My course goal</h2>
        <h3 v-if="course.isVisible">{{ course.goal }}</h3>
        <button @click="toggleGoal">Toggle Goal</button>
   </section> -->

   <section>
        <h2>My course goal</h2>
        <h3 v-if="course.isVisible">{{ course.goal }}</h3>
        <button @click="toggleGoal">Toggle Goal</button>
   </section>
</template>


<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';

export default {
    // setup() {
    //     const courseGoal = ref('Learn Composition API');
    //     const isVisible = ref(true);

    //     function toggleGoal() {
    //         isVisible.value = !isVisible.value;
    //     }

    //     return {
    //         courseGoal: courseGoal,
    //         isVisible: isVisible,
    //         toggleGoal: toggleGoal
    //     }
    // }

    // setup() {
    //     const course = ref({
    //         goal: 'Learn Composition API',
    //         isVisible: true
    //     });

    //     const courseObj = course.value;
    //     function toggleGoal() {
    //         courseObj.isVisible = !courseObj.isVisible;
    //     }

    //     return {
    //         course: course,
    //         toggleGoal: toggleGoal
    //     }
    // }

    // setup() {
    //     const course = reactive({
    //         goal: 'Learn Composition API',
    //         isVisible: true
    //     });

    //     const toggleGoal = function () {
    //         course.isVisible = !course.isVisible;
    //     }

    //     return {
    //         course: course,
    //         toggleGoal: toggleGoal
    //     }
    // }

    data() {
        return {
            course: {
                goal: 'Learn Composition API',
                isVisible: true
            }
        }
    },
    methods: {
        toggleGoal() {
            this.course.isVisible = !this.course.isVisible;
        }
    }
}


</script>
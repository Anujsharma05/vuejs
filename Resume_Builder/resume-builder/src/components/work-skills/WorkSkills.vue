<template>
  <section>
    {{ skills }}
    <ul class="heading">
      <li>Name</li>
      <li>Rating</li>
      <font-awesome-icon
        class="reset-stars"
        icon="plus"
        @click="addSkill"
      ></font-awesome-icon>
    </ul>
    <ul class="skills-container">
      <li v-for="(skill, index) in skills" :key="index">
        <div class="input-div">
          <input type="text" v-model="skill.name" />
        </div>
        <review-stars v-model="skill.skillLevel"></review-stars>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref } from "vue";
import ReviewStars from "../ReviewStars.vue";
export default {
  components: { ReviewStars },
  setup() {
    const skills = ref([
      {
        name: "java",
        skillLevel: 4,
      },
      {
        name: "sql",
        skillLevel: 2,
      },
    ]);

    function addSkill() {
      skills.value.push({
        name: "",
        skillLevel: 0,
      });
    }

    return {
      skills,
      addSkill,
    };
  },
};
</script>

<style scoped>
.heading {
  list-style: none;
  padding: 0;
  width: 80%;
  margin: auto;
  display: flex;
  text-align: center;
  margin: 1rem;
}

.heading > li {
  flex: 1;
}

.skills-container {
  list-style: none;
  padding: 0;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills-container > li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-div {
  flex-basis: 50%;
}

.input-div input {
  width: 100%;
}
</style>
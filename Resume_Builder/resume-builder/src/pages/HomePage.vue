<template>
  <h2>How do you want to start?</h2>
  <div class="home-page">
    <section class="select-option" @click="openResumeForm">
      <font-awesome-icon id="new_resume-icon" icon="file-pen" />
      <span>CREATE A NEW RESUME</span>
      <p>We will help you create a resume</p>
    </section>
    <section class="select-option" @click="openWorkSkills">
      <font-awesome-icon id="existing_resume-icon" icon="file-arrow-up" />
      <span>I ALREADY HAVE A RESUME</span>
      <p>We'll re-format it and fill in your information</p>
    </section>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    function openResumeForm() {
      router.push({ name: "basic-info" });
    }

    function openWorkSkills() {
      router.push({ name: "work-skill" });
    }

    return {
      openResumeForm,
      openWorkSkills,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2rem;
}
.select-option {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  min-height: 270px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px hsl(0, 16%, 74%);
  border-radius: 5px;
}

.select-option:hover {
  border: 1px solid var(--primary-color);
}

.select-option:active {
  border: 1px solid var(--active-color);
}

.select-option svg {
  padding: 1rem;
}

#new_resume-icon {
  width: 80px;
  height: 80px;
}

#existing_resume-icon {
  width: 80px;
  height: 80px;
}
</style>
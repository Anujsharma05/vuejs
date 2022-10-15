<template>
  <section class="filters">
    <base-card>
      <h1>Find your Coach</h1>
      <section class="actions">
        <div class="form-control">
          <input type="checkbox" id="frontend" value="frontend" :checked="selectedAreas.frontend" @change="updateFilters" />
          <label for="frontend">Frontend</label>
        </div>
        <div class="form-control">
          <input type="checkbox" id="backend" value="backend" :checked="selectedAreas.backend" @change="updateFilters" />
          <label for="backend">Backend</label>
        </div>
        <div class="form-control">
          <input type="checkbox" id="career" value="career" :checked="selectedAreas.career" @change="updateFilters" />
          <label for="career">Career</label>
        </div>
      </section>
    </base-card>
  </section>
</template>

<script>
export default {
    emits: ['filtered-coach'],
    data() {
        return {
            selectedAreas: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    methods: {
        updateFilters(event) {
            this.selectedAreas[event.target.value] = event.target.checked;
            this.$emit('filtered-coach', this.selectedAreas);
        }
    }
}
</script>

<style scoped>
h1 {
  margin: 0;
}

.form-control {
    display: inline-block;
    margin: 1rem;
    margin-left: 0;
}

label:hover {
    color: var(--clr-secondary);
    cursor: pointer;
}
</style>
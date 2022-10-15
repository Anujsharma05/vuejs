<template>
  <div class="review-star-container">
    <font-awesome-icon
      icon="star"
      class="review-star"
      :class="{ checked: isChecked[starNo - 1] }"
      @mouseenter="setSelectedStars(starNo)"
      @mouseleave="mouseLeave"
      @click="setStarStatus(starNo, true)"
      v-for="starNo in 5"
      :key="starNo"
    ></font-awesome-icon>
    <font-awesome-icon
      class="reset-stars"
      icon="circle-xmark"
      @click="resetStars"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      isChecked: [false, false, false, false, false],
      stars: 0,
      starsSelected: false,
    };
  },
  mounted() {
    this.stars = this.modelValue;
    this.setSelectedStars(this.stars);
    this.starsSelected = true;
  },
  methods: {
    setSelectedStars(starNo) {
      const starCheckedArr = this.isCheckedDefault();
      for (let i = 1; i <= starNo; i++) {
        starCheckedArr[i - 1] = true;
      }
      this.isChecked = starCheckedArr;
    },
    mouseLeave() {
      if (this.starsSelected) {
        this.setSelectedStars(this.stars);
      } else {
        this.isChecked = this.isCheckedDefault();
      }
    },
    setStarStatus(starNo, selectStatus) {
      this.stars = starNo;
      this.starsSelected = selectStatus;

      this.$emit("update:modelValue", starNo);
    },
    isCheckedDefault() {
      return [false, false, false, false, false];
    },
    resetStars() {
      this.isChecked = this.isCheckedDefault();
      this.setStarStatus(0, false);
    },
  },
};
</script>

<style scoped>
.review-star {
  margin: 0 0.3rem;
  height: 1.2rem;
  vertical-align: middle;
}

.checked {
  color: orange;
}

.reset-stars {
  color: var(--primary-color);
  cursor: pointer;
  margin-left: 2rem;
  height: 1.2rem;
  vertical-align: middle;
}

.reset-stars:active {
  color: red;
  cursor: pointer;
}
</style>
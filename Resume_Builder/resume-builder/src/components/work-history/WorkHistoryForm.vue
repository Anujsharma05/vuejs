<template>
  <section>
    <h3>Tell us about your most recent job</h3>
    <p>We'll start there and work backward.</p>

    <form class="work-history" @submit.prevent="nextButton">
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" v-model.trim="workHistory.jobTitle" />
      </div>

      <div class="form-group">
        <label for="employer">Employer</label>
        <input type="text" id="employer" v-model.trim="workHistory.employer" />
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" v-model.trim="workHistory.city" />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" v-model.trim="workHistory.country">
          <option value="">--Please select--</option>
          <option v-for="ctry in countries" :key="ctry" :value="ctry">
            {{ ctry }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="startDate">Start Date</label>
        <DatePicker
          :monthPicker="monthPicker"
          id="startDate"
          v-model="workHistory.startDate"
        ></DatePicker>
      </div>

      <div class="form-group">
        <label for="endDate">End Date</label>
        <DatePicker
          :monthPicker="monthPicker"
          id="endDate"
          v-model="workHistory.endDate"
          :disabled="currentlyWorking"
          :class="{ disabled: currentlyWorking }"
        ></DatePicker>
      </div>
      <div>
        <input
          type="checkbox"
          id="currentlyWorking"
          v-model="currentlyWorking"
        />
        <label for="currentlyWorking">I currently work here</label>
      </div>
      <div class="form-action">
        <button type="button" @click="backButton">BACK</button>
        <button type="submit">NEXT</button>
      </div>
    </form>
  </section>
</template>

<script>
import { ref, reactive, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  emits: {
    "view-type": {
      type: String,
    },
  },
  props: {
    mode: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const initialHistoryState = {
      id: 0,
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: null,
      endDate: null,
    };

    const workHistory = reactive({ ...initialHistoryState });
    const monthPicker = ref(true);
    const countries = ref([
      "India",
      "Australia",
      "China",
      "Japan",
      "Italy",
      "France",
    ]);
    const currentlyWorking = ref(false);

    const store = useStore();
    const router = useRouter();

    // const mode = toRefs(props.mode);

    watch(currentlyWorking, function (value) {
      if (value) {
        workHistory.endDate = null;
      }
    });

    onMounted(function () {
      if (props.mode.action === "edit") {
        const history = store.getters.workHistory;
        const filteredHistory = history.find(
          (entry) => entry.id === props.mode.id
        );
        Object.assign(workHistory, filteredHistory);
      } else if (props.mode.action === "add") {
        resetWorkHistory();
      }
    });

    function resetWorkHistory() {
      Object.assign(workHistory, initialHistoryState);
    }

    function backButton() {
      router.push({ name: "basic-info" });
    }

    function nextButton() {
      store.dispatch("addWorkHistory", workHistory);
      context.emit("view-type", "summary");
    }

    return {
      workHistory,
      monthPicker,
      countries,
      currentlyWorking,
      backButton,
      nextButton,
    };
  },
};
</script>

<style scoped>
h3 {
  color: var(--primary-color);
}

.work-history {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.form-group {
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
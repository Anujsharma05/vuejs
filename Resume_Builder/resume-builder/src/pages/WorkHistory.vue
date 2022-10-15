<template>
  <div>
    <work-history-form
      v-if="viewType === 'form'"
      :mode="mode"
      @view-type="setViewType"
    ></work-history-form>

    <work-history-summary
      v-else
      @add-entry="addEntry"
      @edit-entry="editEntry"
    ></work-history-summary>
  </div>
</template>

<script>
import WorkHistoryForm from "../components/work-history/WorkHistoryForm.vue";
import WorkHistorySummary from "../components/work-history/WorkHistorySummary.vue";

import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    WorkHistoryForm,
    WorkHistorySummary,
  },
  setup() {
    const viewType = ref("form");

    const mode = reactive({
      action: "", //add or edit
      id: 0,
    });

    const route = useRoute();

    onMounted(function () {
      const viewType = route.params.viewType;
      if (viewType) {
        setViewType(viewType);
      }
    });

    function setViewType(viewType) {
      viewType.value = viewType;
    }

    function addEntry() {
      mode.action = "add";
      setViewType("form");
    }

    function editEntry(id) {
      mode.action = "edit";
      mode.id = id;
      setViewType("form");
    }

    return {
      viewType,
      mode,
      addEntry,
      editEntry,
      setViewType,
    };
  },
};
</script>
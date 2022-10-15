<template>
  <section>
    <h1>Work History Summary</h1>

    <div class="backdrop"></div>
    <div class="modal"></div>
    <ul class="work-list">
      <li v-for="(entry, index) in workHistory" :key="index">
        <span class="numbering-badge"></span>
        <span class="numbering">{{ index + 1 }}</span>

        <div>
          <span class="jobHeading"
            >{{ entry.jobTitle }}, {{ entry.employer }}</span
          >
          | {{ entry.city }}, {{ entry.country }} |
          {{ entry.startDate ? entry.startDate.year : "Current" }} -
          {{ entry.endDate ? entry.endDate.year : "Current" }}
        </div>
        <div>
          <font-awesome-icon
            class="entry-action"
            icon="pencil"
            @click="editEntry(entry.id)"
          />
          <font-awesome-icon
            class="entry-action"
            icon="trash-can"
            @click="deleteEntry(entry.id)"
          />
        </div>
      </li>
    </ul>
    <div class="add-entry" @click="addEntry">
      <font-awesome-icon icon="circle-plus" id="add-icon" />
      <span>Add Another Position</span>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  emits: {
    "add-entry": null,
    "edit-entry": null,
  },
  setup(_, context) {
    const store = useStore();

    const workHistory = computed(function () {
      return store.getters.workHistory;
    });

    function editEntry(id) {
      context.emit("edit-entry", id);
    }

    function deleteEntry(id) {
      store.dispatch("deleteWorkHistoryEntry", id);
    }

    function addEntry() {
      context.emit("add-entry");
    }

    return {
      workHistory,
      editEntry,
      deleteEntry,
      addEntry,
    };
  },
};
</script>

<style scoped>
.jobHeading {
  font-weight: bold;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
  min-height: 100px;
}

.numbering-badge {
  position: absolute;
  display: inline-block;
  width: 130px;
  height: 50px;
  background-color: var(--primary-color);
  transform: rotateZ(-45deg) translateX(-21px) translateY(-85px);
}

.numbering {
  position: absolute;
  transform: translateX(-18px) translateY(-18px);
  color: white;
}

.entry-action {
  margin: 0 1rem;
  cursor: pointer;
}

.entry-action:hover {
  color: var(--primary-color);
}

.add-entry {
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border: 3px dashed black;
}

.add-entry:hover,
.add-entry:active {
  border: 3px dashed var(--primary-color);
  color: var(--primary-color);
}

#add-icon {
  height: 30px;
  vertical-align: middle;
}

.add-entry span {
  vertical-align: middle;
  font-weight: bold;
}
</style>
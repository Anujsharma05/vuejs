'use strict';

function fetchWorkHistoryEntryIndex(state, id) {
    return state.user.workHistory.findIndex(work => work.id === id);
}

const mutations = {
    saveBasicInfo(state, basicInfo) {
        state.user.basicInfo = basicInfo;
    },
    addWorkHistory(state, entry) {

        const workHistory = state.user.workHistory;
        if (!entry.id) {
            entry.id = new Date().getTime();
            workHistory.push(entry);
        } else {
            const index = fetchWorkHistoryEntryIndex(state, entry.id);
            workHistory[index] = entry;
        }
    },
    deleteWorkHistoryEntry(state, entryId) {
        const index = fetchWorkHistoryEntryIndex(state, entryId);
        state.user.workHistory.splice(index, 1);
    },
}

export default mutations;
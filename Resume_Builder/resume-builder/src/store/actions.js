export default {
    saveBasicInfo(context, basicInfo) {
        context.commit('saveBasicInfo', basicInfo);
    },
    addWorkHistory(context, workHistory) {
        context.commit('addWorkHistory', workHistory);
    },
    deleteWorkHistoryEntry(context, entryId) {
        context.commit('deleteWorkHistoryEntry', entryId);
    },
    testMutation(context) {
        context.commit('testMutation');
    }
}
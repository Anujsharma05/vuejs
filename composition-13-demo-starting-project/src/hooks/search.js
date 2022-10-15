import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {

    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(function () {
        let filteredItems = [];
        if (activeSearchTerm.value) {
            filteredItems = items.value.filter((item) =>
                item[searchProp].includes(activeSearchTerm.value)
            );
        } else if (items.value) {
            filteredItems = items.value;
        }
        return filteredItems;
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }

    watch(enteredSearchTerm, function (val) {
        setTimeout(() => {
            if (val === enteredSearchTerm.value) {
                activeSearchTerm.value = val;
            }
        }, 300);
    });

    function testMethod() {
        console.log('test method called');
    }

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch,
        testMethod
    }
}
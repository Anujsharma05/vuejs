<template>
{{ goals['another-key']}}
    <ul>
        <li v-for="note in notes" :key="note">
            <slot name="mySlot" :item="note" another-prop="Some description for the notes"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            notes: ['Vue Js is awesome', 'Complete the course'],
            goals: {
                'another-key': 'testing purposes',
                item: 'anything'
            }
        }
    }
}
</script>
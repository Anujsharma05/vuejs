<template>
    <li>
        <base-card>
            <a href="abc.com">{{ email }}</a>
            <p>{{ message }}</p>
        </base-card>
    </li>
</template>
<script>
import BaseCard from '../ui/BaseCard.vue'
export default {
  components: { BaseCard },
    props: ['email', 'message'],
}
</script>
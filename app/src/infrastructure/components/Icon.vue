<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{name: string}>()

const iconClass = computed(() => {
  return 'fa-' + props.name
})
</script>

<template>
  <i class="fa-solid" :class="iconClass"></i>
</template>
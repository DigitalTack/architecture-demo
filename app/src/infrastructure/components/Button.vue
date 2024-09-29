<script setup lang="ts">
	import { computed } from 'vue'
	import { ButtonColor } from '@/infrastructure/types/Button'
	import type { ButtonProps } from '@/infrastructure/types/Button'

	const props = withDefaults(defineProps<ButtonProps>(), {
		color: ButtonColor.primary
	})

	const colorMod = computed(() => {
		return 'button--color-' + props.color
	})
</script>

<template>
	<button class="button" :class="colorMod">
		<slot />
	</button>
</template>

<style scoped>
.button {
  padding: 15px;
  color: var(--light-font);
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.button--color-primary {
  background-color: var(--primary-color);
}

.button--color-dark {
  background-color: var(--dark-shades-color);
  color: var(--light-font);
}

.button--color-dark:hover {
  background-color: var(--dark-accent-color);
}

.button--color-light {
  background-color: var(--light-shades-color);
  color: var(--dark-font);
}

.button--color-light:hover {
  background-color: var(--light-accent-color);
  color: var(--dark-font);
}
</style>
<script setup lang="ts">
	import { computed } from 'vue'
	import type { SectionProps } from '@/infrastructure/types/Section'

	const props = defineProps<SectionProps>()

	const modeMod = computed(() => {
		return 'section--mode-' + props.mode
	})
</script>

<template>
	<section
		:id="id"
		class="section"
		:class="modeMod"
	>
		<div class="container">
			<slot />
		</div>
	</section>
</template>

<style scoped>
	.section {
		width: 100%;
	}

	.section--mode-light {
		background-color: var(--light-shades-color);
		color: var(--dark-font);
	}

	.section--mode-dark {
		background-color: var(--dark-shades-color);
		color: var(--light-font);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>

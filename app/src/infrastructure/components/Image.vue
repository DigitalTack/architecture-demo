<script setup lang="ts">
	import { computed } from 'vue'
	import type { Image } from '@/domain/entities/Image'
	import { ImageSize } from '@/domain/entities/Image'

	const props = withDefaults(defineProps<{ image: Image, size: ImageSize }>(), {
		size: ImageSize.small
	})

	const src = computed(() => {
		return `${import.meta.env.VITE_BASE_URL}${props.image.sizes[props.size]}`
	})

	const sizeMod = computed(() => {
		return 'image--size-' + props.size
	})
</script>

<template>
	<img
		class="image"
		:class="sizeMod"
		:src="src"
		:alt="image.alt"
	/>
</template>

<style scoped>
	.image--size-small {
		width: 100px;
	}

	.image--size-medium {
		width: 200px;
	}

	.image--size-large {
		width: 500px;
	}

	.image--size-full {
		width: 100%;
	}
</style>

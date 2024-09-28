<script setup lang="ts">
	import { computed } from 'vue'
	import { LogoSize } from '../types/Logo'
	import type { LogoProps } from '../types/Logo'

	const props = withDefaults(defineProps<LogoProps>(), {
		size: LogoSize.small
	})
	const sizeMod = computed(() => {
		return 'logo--size-' + props.size
	})
</script>

<template>
	<img
		class="logo"
		:class="sizeMod"
		src="/logo.png"
	/>
</template>

<style scoped>
	.logo {
		height: 100%;
	}

	.logo--size-small {
		width: 100px;
	}

	.logo--size-medium {
		width: 150px;
	}

	.logo--size-large {
		width: 200px;
	}
</style>

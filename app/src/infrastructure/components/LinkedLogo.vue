<script setup lang="ts">
	import Logo from './Logo.vue'
	import { LogoSize } from '../types/Logo'
	import type { LogoProps } from '../types/Logo'

	const props = withDefaults(defineProps<LogoProps>(), {
		size: LogoSize.small
	})
</script>

<template>
	<RouterLink to="/">
		<Logo :size="props.size" />
	</RouterLink>
</template>

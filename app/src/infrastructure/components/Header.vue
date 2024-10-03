<script setup lang="ts">
	import LinkedLogo from '@/infrastructure/components/LinkedLogo.vue'
	import { LogoSize } from '@/infrastructure/types/Logo'
	import Menu from '@/infrastructure/components/Menu.vue'
</script>

<template>
	<header class="header">
		<LinkedLogo :size="LogoSize.small" />
		<Menu />
	</header>
</template>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
	}
</style>

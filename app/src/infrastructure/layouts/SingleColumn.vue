<script setup lang="ts">
	import Header from '@/infrastructure/components/Header.vue'
	import Section from '@/infrastructure/components/Section.vue'
	import { SectionMode } from '@/infrastructure/types/Section'
</script>

<template>
	<Section
		id="header"
		:mode="SectionMode.light"
	>
		<Header />
	</Section>
	<main>
		<slot name="content" />
	</main>
</template>

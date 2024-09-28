<script setup lang="ts">
	import Image from '@/infrastructure/components/Image.vue'
	import { ImageSize } from '@/domain/entities/Image'
	import type { Product } from '@/domain/entities/Product'

	defineProps<Product>()
</script>

<template>
	<div class="product-card">
		<Image
			:image="image"
			:size="ImageSize.medium"
		/>
		<h3>{{ name }}</h3>
	</div>
</template>

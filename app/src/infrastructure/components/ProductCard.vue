<script setup lang="ts">
	import Image from '@/infrastructure/components/Image.vue'
	import Button from '@/infrastructure/components/Button.vue'
	import Icon from '@/infrastructure/components/Icon.vue'
	import { ImageSize } from '@/domain/entities/Image'
	import type { Product } from '@/domain/entities/Product'

	defineProps<{product: Product}>()

	const emit = defineEmits(['cart:add'])
</script>

<template>
	<div class="product-card">
		<Image
			:image="product.image"
			:size="ImageSize.medium"
		/>
		<h3>{{ product.name }}</h3>
		<p>{{ product.price }} €</p>
		<Button @click="emit('cart:add', product.id)"><Icon name="cart-plus"></Icon>Add to cart</Button>
	</div>
</template>

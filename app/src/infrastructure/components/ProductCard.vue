<script setup lang="ts">
	import { computed } from 'vue'

	import Button from '@/infrastructure/components/Button.vue'
	import CardTitle from '@/infrastructure/components/CardTitle.vue'
	import Icon from '@/infrastructure/components/Icon.vue'
	import Image from '@/infrastructure/components/Image.vue'
	import { ImageSize } from '@/domain/entities/Image'
	import { ButtonColor } from '@/infrastructure/types/Button'
	import type { Product } from '@/domain/entities/Product'

	const props = defineProps<{product: Product}>()

	const emit = defineEmits(['cart:add'])
  const ariaLabel = computed(() => {
    return 'Add ' + props.product.name + ' to cart'
  })
</script>

<template>
	<div class="product-card">
		<Image
			:image="product.image"
			:size="ImageSize.medium"
		/>
		<div class="product-card__info">
			<CardTitle class="product-card__info__item">{{ product.name }}</CardTitle>
			<p class="product-card__info__item">{{ product.price }} €</p>
		</div>
		<Button 
		  :color="ButtonColor.dark"
			@click="emit('cart:add', product.id)"
      :ariaLabel="ariaLabel"
		>
			<Icon name="cart-plus"></Icon>Add to cart
	  </Button>
	</div>
</template>

<style scoped>
.product-card__info {
	display: flex;
	justify-content: space-between;
}

.product-card button i {
	margin-right: 8px;
}
</style>

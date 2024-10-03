<script setup lang="ts">
	import { computed } from 'vue'
	import { ImageSize } from '@/domain/entities/Image'
	import Button from '@/infrastructure/components/Button.vue'
	import CardTitle from '@/infrastructure/components/CardTitle.vue'
	import Icon from '@/infrastructure/components/Icon.vue'
	import Image from '@/infrastructure/components/Image.vue'
	import type { Product } from '@/domain/entities/Product'

  const props = defineProps<{
    product: Product
    amount: number
  }>()

  const total = computed(() => {
    return props.amount * props.product.price
  })
</script>

<template>
  <div class="cart-item">
		<div>
      <span><Image :image="product.image" :size="ImageSize.small" /></span>
		  <span>
        <CardTitle>{{ product.name }}</CardTitle>
        <p>{{ product.price }}</p>
      </span>
    </div>
    <div>
      <p><Button><Icon name="minus"></Icon></Button>{{ amount }}<Button><Icon name="plus"></Icon></Button></p>
    </div>
    <div>Total: {{ total }} €</div>
  </div>
</template>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>
<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue'
  import type { Cart } from '@/domain/entities/Cart.ts'
  import Icon from '@/infrastructure/components/Icon.vue'
	import Bus from '@/infrastructure/bus.ts'

	const bus = Bus.create()

  const cart = ref<Cart>({})

  const counter = computed(() => {
    let total = 0

    if (Object.values(cart.value).length > 0) {
      const amounts: Array<number> = Object.values(cart.value)
      amounts.forEach(amount => {
        total += amount
      })
    }
    return total
  })

	onMounted(() => {
		bus.subscribe('cart:updated', (payload: Cart) => {
			Object.assign(cart.value, payload)
		})

		bus.publish('cart:get')
	})
</script>

<template>
  <span class="cart">
    <Icon name="cart-shopping" />
    <span class="cart__counter">{{ counter }}</span>
  </span>
</template>

<style scoped>
.cart i {
  margin-right: 8px;
}
</style>
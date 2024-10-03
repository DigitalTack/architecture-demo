<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue'

  import type { Cart } from '@/domain/entities/Cart.ts'
	import type { Product, ProductId } from '@/domain/entities/Product'
	import SingleColumn from '@/infrastructure/layouts/SingleColumn.vue'
	import MainTitle from '@/infrastructure/components/MainTitle.vue'
	import Section from '@/infrastructure/components/Section.vue'
	import { SectionMode } from '@/infrastructure/types/Section'
	import Bus from '@/infrastructure/bus.ts'
  import CartItem from '@/infrastructure/components/CartItem.vue'

	const bus = Bus.create()

  const cart = ref<Cart>({})
	const products = ref<Array<Product>>([])

	onMounted(() => {
		bus.subscribe('products:loaded', (payload: Array<Product>) => {
			Object.assign(products.value, payload)
		})
		bus.subscribe('cart:updated', (payload: Cart) => {
			Object.assign(cart.value, payload)
		})

		bus.publish('products:load')
		bus.publish('cart:get')
	})

  function getProduct(productId: ProductId): Product {
    const product = products.value.find(product => product.id == productId)

    return product!
  }

  const total = computed(() => {
    let total = 0
    for (const productId in cart.value) {
      const product = getProduct(productId)

      if (product) {
        const amount = cart.value[productId]
        total += product.price * amount
      }
    }
    return total
  })
</script>

<template>
	<SingleColumn>
		<template v-slot:content>
			<Section
				id="title"
				:mode="SectionMode.dark"
			>
				<MainTitle>Cart</MainTitle>
			</Section>
			<Section
				id="content"
				:mode="SectionMode.light"
			>
      <div v-for="(amount, productId) in cart" :key="productId">
        <CartItem v-if="getProduct(productId)" :product="getProduct(productId)" :amount="amount"/>
      </div>
      <div>Total: {{ total }}</div>
			</Section>
		</template>
	</SingleColumn>
</template>
<script lang="ts" setup>
	import ProductCard from '@/infrastructure/components/ProductCard.vue'
	import MainTitle from '@/infrastructure/components/MainTitle.vue'
	import Section from '@/infrastructure/components/Section.vue'
	import { SectionMode } from '@/infrastructure/types/Section'
	import SingleColumn from '@/infrastructure/layouts/SingleColumn.vue'
	import type { Product } from '@/domain/entities/Product'
	import { onMounted, ref } from 'vue'
	import Bus from '@/infrastructure/bus'

	const bus = Bus.create()

	const products = ref<Array<Product>>([])

	onMounted(() => {
		bus.publish('products:load')

		bus.subscribe('products:loaded', (payload: Array<Product>) => {
			Object.assign(products.value, payload)
		})
	})
</script>

<template>
	<SingleColumn>
		<template v-slot:content>
			<Section
				id="title"
				:mode="SectionMode.dark"
			>
				<MainTitle>Products</MainTitle>
			</Section>
			<Section
				id="content"
				:mode="SectionMode.light"
			>
				<div class="product">
					<ProductCard
						v-for="(product, index) in products"
						:key="index"
						class="product__card"
						:name="product.name"
						:image="product.image"
						:price="product.price"
					/>
				</div>
			</Section>
		</template>
	</SingleColumn>
</template>

<style scoped>
	.product {
		display: flex;
		gap: 1rem;
	}
</style>

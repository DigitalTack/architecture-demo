<script lang="ts" setup>
  import ProductCard from '@/infrastructure/components/visual/ProductCard.vue';
  import SingleColumn from '@/infrastructure/layouts/SingleColumn.vue';
  import type { Product } from '@/domain/entities/Product';
  import { computed, onMounted, ref } from 'vue';
  import Bus from '../bus';

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
            <h2>Products</h2>
              <div class="product">
                <ProductCard 
                  v-for="(product, index ) in products"
                  :key="index"
                  class="product__card"
                  :name="product.name"
                  :image="product.image"
                />
              </div>
        </template>
    </SingleColumn>
</template>

<style scoped>
  .product {
    display: flex;
  }
</style>
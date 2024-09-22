<script setup lang="ts">
  import Image from '@/infrastructure/components/visual/Image.vue'
  import { ImageSize } from '@/domain/entities/Image'
  import type { Product } from '@/domain/entities/Product'

  const props = defineProps<Product>()

</script>

<template>
    <div class="product-card">
        <Image :src="image.src" :alt="image.alt" :size="ImageSize.medium" />
        <h3>{{ name }}</h3>
    </div>
</template>

<style scoped>
</style>
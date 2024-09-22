<script setup lang="ts">
  import Header from '@/infrastructure/components/visual/Header.vue'
</script>

<template>
    <section class="header">
        <Header />
    </section>
    <main>
        <section class="content">
            <slot name="content"/>
        </section>
    </main>
</template>

<style scoped>
    .header,
    main {
        max-width: var(--desktop);
    }

</style>
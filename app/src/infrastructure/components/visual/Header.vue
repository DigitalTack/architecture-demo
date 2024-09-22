<script setup lang="ts">
  import LinkedLogo from './LinkedLogo.vue'
  import { LogoSize } from '../../types/Logo'
  import Menu from './Menu.vue'
</script>

<template>
    <header class="header">
        <LinkedLogo :size="LogoSize.small"/>
        <Menu />
    </header>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
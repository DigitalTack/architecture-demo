<script setup lang="ts">
  import CartIconView from '@/infrastructure/views/CartIconView.vue'
</script>

<template>
	<ul class="menu">
		<li class="menu__item">
			<RouterLink to="/">Home</RouterLink>
		</li>
		<li class="menu__item">
			<RouterLink to="/cart"><CartIconView /></RouterLink>
		</li>
	</ul>
</template>

<style scoped>
	.menu {
		list-style: none;
		display: flex;
		gap: 1rem;
	}

	.menu__item {
		display: inline;
	}

	.menu__item a {
		color: var(--light-font);
		background-color: var(--dark-shades-color);
		padding: 10px;
		transition: 0.3s;
	}

	.menu__item a:visited {
		color: var(--light-font);
	}

	.menu__item a:hover {
		background-color: var(--dark-accent-color);
	}
</style>

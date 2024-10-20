<script setup lang="ts">
	import { computed } from 'vue'
	import type { TextInputProps } from '@/infrastructure/types/TextInput'

	const props = withDefaults(defineProps<TextInputProps>(), {
		required: false
	})
</script>

<template>
	<form class="input">
    <label class="input__label" :for="name">{{ label }}</label>
    <input class="input__input" :id="name" :name="name" :placeholder="placeholder" :required="required" type="text" />
	</form>
</template>


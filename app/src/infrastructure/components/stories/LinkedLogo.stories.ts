import type { Meta, StoryObj } from '@storybook/vue3'

import LinkedLogo from '../LinkedLogo.vue'
import { LogoSize } from '@/infrastructure/types/Logo'

const meta = {
	title: 'LinkedLogo',
	component: LinkedLogo,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select', options: LogoSize }
	}
} satisfies Meta<typeof LinkedLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: {
		size: LogoSize.small
	}
}

export const Medium: Story = {
	args: {
		size: LogoSize.medium
	}
}

export const Large: Story = {
	args: {
		size: LogoSize.large
	}
}

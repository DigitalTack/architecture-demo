import type { Meta, StoryObj } from '@storybook/vue3'

import Image from '../Image.vue'
import { ImageSize } from '@/domain/entities/Image'

const meta = {
	title: 'Image',
	component: Image,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select', options: ImageSize },
		alt: { control: 'text' },
		src: { control: 'src' }
	}
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: {
		alt: 'Image alt text',
		src: 'media/file.jpg',
		size: ImageSize.small
	}
}

export const Medium: Story = {
	args: {
		alt: 'Image alt text',
		src: 'media/file.jpg',
		size: ImageSize.medium
	}
}

export const Large: Story = {
	args: {
		alt: 'Image alt text',
		src: 'media/file.jpg',
		size: ImageSize.large
	}
}

export const Full: Story = {
	args: {
		alt: 'Image alt text',
		src: 'media/file.jpg',
		size: ImageSize.full
	}
}

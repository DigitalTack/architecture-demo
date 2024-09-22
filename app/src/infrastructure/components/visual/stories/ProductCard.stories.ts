import type { Meta, StoryObj } from '@storybook/vue3'

import ProductCard from '../ProductCard.vue'

const meta = {
    title: 'ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    argTypes: {
        product: { control: 'text' },
        image: {
            control: 'object'
        }
    }
} satisfies Meta<typeof ProductCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'Product name',
        image: {
            src: 'media/image.jpg',
            alt: 'Alt text for product image'
        }
    }
}
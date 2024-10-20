import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/vue'

import Image from '@/infrastructure/components/Image.vue'
import type { Image as TImage } from '@/domain/entities/Image'
import { ImageSize } from '@/domain/entities/Image'

describe('An image', () => {

  it('has an alternative text', () => {
    const fakeImage: TImage = {
      sizes: {
        small: 'test.jpg',
      },
      alt: 'Alt text'
    }

    const props = {
      image: fakeImage,
      size: ImageSize.small
    }

    render(Image, { props })

    const image = screen.getByRole('img')

    expect(image.getAttribute('alt')).toBe(fakeImage.alt)
  })
})


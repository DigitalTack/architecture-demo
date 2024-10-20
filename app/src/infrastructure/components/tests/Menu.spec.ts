import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/vue'

import Menu from '@/infrastructure/components/Menu.vue'
import { router } from '@/infrastructure/routes'

describe('The menu', () => {
  it('has a link to the home page', () => {
    const options = {
      global: {
        plugins: [router]
      }
    }
    render(Menu, options)

    const link = screen.getByRole('link', { name: 'Home' })

    expect(link.getAttribute('href')).toBe('/')
  })
})



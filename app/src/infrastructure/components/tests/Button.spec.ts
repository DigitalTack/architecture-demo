import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/vue'

import Button from '@/infrastructure/components/Button.vue'
import { ButtonColor } from '@/infrastructure/types/Button'

describe('A button', () => {

  it('is rendered', () => {
    const options = {
      slots: {
        default: 'Text'
      }
    }

    render(Button, options)

    const button = screen.getByRole('button', { name: 'Text' })

    expect(button).toBeTruthy()
  })
})

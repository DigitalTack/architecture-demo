import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/vue'

import Button from '@/infrastructure/components/Button.vue'
import { ButtonColor } from '@/infrastructure/types/Button'

describe('A button', () => {
  it('is not empty', () => {
    const options = {
      slots: {
        default: 'Text'
      }
    }

    render(Button, options)

    const button = screen.getByRole('button', { name: 'Text' })

    expect(button).toBeTruthy()
  })

  it('has a label', () => {
    const options = {
      slots: {
        default: 'Text'
      },
      props: {
        ariaLabel: 'aria label'
      }
    }

    render(Button, options)

    const button = screen.getByRole('button', { label: options.props.ariaLabel })

    expect(button).toBeTruthy()
  })
})

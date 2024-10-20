import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/vue'

import TextInput from '@/infrastructure/components/TextInput.vue'

describe('A text input', () => {
  it('has a label', () => {
    const options = {
      props: {
        name: 'search',
        label: 'Search',
        placeholder: 'Search for a product'
      }
    }

    render(TextInput, options)

    const input = screen.getByLabelText(options.props.label)

    expect(input).toBeTruthy()
  })
})




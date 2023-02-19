import { render } from '@testing-library/react'

import { Bar } from './Bar'
import * as style from './Bar.css'

describe('Atom/Animation/Bar', () => {

  it('renders with the correct attributes', () => {

    const textContent = 'Loading...'
    const screen = render(<Bar>{textContent}</Bar>)
    const container = screen.getByText(textContent)

    const expected = {
      className: style.container,
    }

    expect(container).toEqual(expect.objectContaining(expected))
  })
})

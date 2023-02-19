import { render } from '@testing-library/react'

import { Error } from './Error'
import * as style from './Error.css'

describe('Components/Atom/Text/Error', () => {

  it('renders with the correct attributes', () => {

    const textContent = 'Error Message'

    const screen = render(<Error>{textContent}</Error>)
    const text = screen.getByText(textContent)

    const expected = {
      className: expect.stringContaining(style.text),
      textContent
    }

    expect(text).toEqual(expect.objectContaining(expected))
  })
})

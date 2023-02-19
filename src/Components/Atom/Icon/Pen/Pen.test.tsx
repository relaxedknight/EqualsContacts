import { render } from '@testing-library/react'

import { Pen } from './Pen'
import * as style from './Pen.css'

describe('Component/Atoms/Image/Variant/Bin', () => {

  describe('passing props', () => {

    const prop = {
      alt: 'Pen'
    }

    it('renders with the correct attributes', () => {

      const screen = render(<Pen {...prop} />)
      const image = screen.getByRole('img')

      const expected = {
        ...prop,
        className: style.image,
        height: 100,
        src: expect.stringContaining('/img/icon/pen.svg'),
        width: 100
      }

      Object.entries(expected).forEach((expected) => {
        expect(image).toHaveProperty(...expected)
      })
    })
  })
})

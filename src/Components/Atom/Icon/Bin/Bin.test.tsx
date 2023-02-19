import { render } from '@testing-library/react'

import { Bin } from './Bin'
import * as style from './Bin.css'

describe('Component/Atoms/Image/Variant/Bin', () => {

  describe('passing props', () => {

    const prop = {
      alt: 'Bin'
    }

    it('renders with the correct attributes', () => {

      const screen = render(<Bin {...prop} />)
      const image = screen.getByRole('img')

      const expected = {
        ...prop,
        className: style.image,
        height: 100,
        src: expect.stringContaining('/img/icon/bin.svg'),
        width: 100
      }

      Object.entries(expected).forEach((expected) => {
        expect(image).toHaveProperty(...expected)
      })
    })
  })
})

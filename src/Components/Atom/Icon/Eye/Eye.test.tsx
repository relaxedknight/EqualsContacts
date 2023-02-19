import { render } from '@testing-library/react'

import { Eye } from './Eye'
import * as style from './Eye.css'

describe('Component/Atoms/Image/Variant/Bin', () => {

  describe('passing props', () => {

    const prop = {
      alt: 'Eye'
    }

    it('renders with the correct attributes', () => {

      const screen = render(<Eye {...prop} />)
      const image = screen.getByRole('img')

      const expected = {
        ...prop,
        className: style.image,
        height: 100,
        src: expect.stringContaining('/img/icon/eye.svg'),
        width: 100
      }

      Object.entries(expected).forEach((expected) => {
        expect(image).toHaveProperty(...expected)
      })
    })
  })
})

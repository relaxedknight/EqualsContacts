import { render } from '@testing-library/react'

import { Avatar } from './Avatar'
import * as style from './Avatar.css'

describe('Component/Atoms/Image/Variant/Avatar', () => {

  it('renders with the correct attributes', () => {

    const prop = {
      alt: 'Alt Value',
      src: 'https://www.testurl.com/fhhf.png'
    } as const

    const screen = render(<Avatar {...prop} />)
    const image = screen.getByRole('img')

    const expected = {
      ...prop,
      className: style.image,
      height: 120,
      src: expect.stringContaining(
        encodeURIComponent(prop.src)
      ),
      width: 120
    }

    Object.entries(expected).forEach((expected) => {
      expect(image).toHaveProperty(...expected)
    })
  })
})

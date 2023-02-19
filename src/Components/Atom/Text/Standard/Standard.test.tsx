import { render } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'
import * as Type from './Standard.type'

const prop = {
  children: 'Lorem ipsum dolor sit amet'
}

describe('Component/Atoms/Text/Standard', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Standard {...prop} />)
    const text = screen.getByText(prop.children)

    const expected = {
      className: style.text,
      localName: 'p'
    }

    Object.entries(expected).forEach((expected) => {
      expect(text).toHaveProperty(...expected)
    })
  })

  describe('optional prop', () => {

    it.each<Type.Prop['type']>([
      'p',
      'span'
    ])('renders as %s tag when passed', (type) => {

      const screen = render(<Standard 
        {...prop} 
        type={type}
      />)
      const text = screen.getByText(prop.children)

      expect(text).toHaveProperty('localName', type)
    })
  })
})

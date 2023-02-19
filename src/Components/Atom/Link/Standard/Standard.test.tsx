import { render } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'
import * as Type from './Standard.type'

const prop: Type.Prop = {
  children: 'Text',
  href: 'http://www.example.com',
  title: 'Title'
}

describe('Component/Atoms/Link/Standard', () => {

  it('renders the correct attributes', () => {

    const screen = render(<Standard {...prop} />)
    const link = screen.getByRole('link')

    const expected = {
      className: style.text,
      href: `${prop.href}/`,
      localName: 'a',
      textContent: prop.children,
      title: prop.title
    }

    Object.entries(expected).forEach((expected) => {
      expect(link).toHaveProperty(...expected)
    })
  })

  it('prepends href attribute with tel: if a tel value is passed', () => {

    const href = '012-345-6789'
    const screen = render(<Standard 
      {...prop}
      href={href} />)
    const link = screen.getByRole('link')

    expect(link).toHaveProperty('href', `tel:${href}`)
  })
})

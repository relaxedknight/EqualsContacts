import { render } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'
import * as Type from './Standard.type'

const Element = 'div'
const prop: Type.Prop = {
  header: <Element>Header</Element>,
  content: <Element>Content</Element>,
  footer: <Element>Footer</Element>,
  testId: 'Board'
}
const map = {
  header: 'header',
  content: 'div',
  footer: 'footer'
}

describe('Component/Atom/Board/Standard', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Standard {...prop} />)
    const container = screen.getByTestId(prop.testId)

    const expected = {
      className: style.container,
      localName: 'section'
    }

    Object.entries(expected).forEach((expected) => {
      expect(container).toHaveProperty(...expected)
    })
  })

  describe.each`
    name          | text
    ${'header'}   | ${'Header'}
    ${'content'}  | ${'Content'}
    ${'footer'}   | ${'Footer'}
  `(`$name`, ({ name, text }: {
    name: 'header' | 'content' | 'footer',
    text: string
  }) => {

    it('renders with the correct attributes', () => {

      const screen = render(<Standard {...prop} />)
      const element = screen.container.querySelector(`.${style[name]}`)

      const expected = {
        className: style[name],
        localName: map[name]
      }

      Object.entries(expected).forEach((expected) => {
        expect(element).toHaveProperty(...expected)
      })
    })
  })
})


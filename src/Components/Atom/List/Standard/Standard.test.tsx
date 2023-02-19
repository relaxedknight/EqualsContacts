import { render } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'
import * as Type from './Standard.type'

const prop: Type.Prop = {
  items: [
    'Item 1',
    'Item 2',
    'Item 3'
  ],
  type: 'ul'
}

describe('Component/Atoms/List/Ordered', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Standard {...prop} />)
    const list = screen.getByRole('list')

    const expected = {
      className: style.container
    }

    Object.entries(expected).forEach((expected) => {
      expect(list).toHaveProperty(...expected)
    })
  })

  it.each<Type.Prop['type']>(['ul', 'ol'])('renders as %s when passed', (type) => {

    const screen = render(<Standard 
      {...prop}
      type={type} 
    />)
    const list = screen.getByRole('list')
  })

  describe('items', () => {

    const Element = 'div'

    it.each`
      type              | items
      ${'strings'}      | ${['1', '2', '3']}
      ${'JSX Elements'} | ${['1', '2', '3'].map((text) => <Element>{`Item ${text}`}</Element>)}
      ${'mixed'}        | ${['1', <Element>Item 2</Element>, '3']}
    `('renders when items are $type', ({ items, type }) => {

      const screen = render(<Standard 
        {...prop}
        items={items}
        type='ul'
      />)
      const list = screen.getByRole('list')

      expect(list).toMatchSnapshot()
    })
  })
})

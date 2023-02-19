import type { FunctionComponent } from 'react'
import { render } from '@testing-library/react'

import { Logo } from './Logo'
import * as style from './Logo.css'

describe('Atom/Icon/Logo', () => {

  describe('container', () => {

    it('renders with the correct attributes', () => {

      const screen = render(<Logo text='Text' />)
      const container = screen.container.querySelector(`.${style.container}`)

      const expected = {
        className: style.container
      }

      expect(container).toEqual(expect.objectContaining(expected))
    })
  })

  describe('text', () => {

    it('renders with the correct attributes', () => {

      const text = 'Text'
      const screen = render(<Logo text={text} />)
      const container = screen.getByText(text)

      const expected = {
        className: style.text,
        textContent: text
      }

      expect(container).toEqual(expect.objectContaining(expected))
    })
  })

  describe('child', () => {

    const Component: FunctionComponent<{
      className?: string
    }> = (prop) => <div className={prop.className}>Component</div>

    it('renders with the correct attributes', () => {

      const screen = render(<Logo text='Text'>
        <Component />
      </Logo>)

      const component = screen.getByText('Component')

      const expected = {
        className: style.child,
        textContent: 'Component'
      }

      expect(component).toEqual(expect.objectContaining(expected))
    })

    it('mutates correctly', () => {

      const screen = render(<Logo text='Text'>
        <Component className='testing' />
      </Logo>)

      const component = screen.getByText('Component')

      const expected = {
        className: `testing ${style.child}`,
        textContent: 'Component'
      }

      expect(component).toEqual(expect.objectContaining(expected))
    })
  })
})

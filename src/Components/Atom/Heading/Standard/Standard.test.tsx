import { render } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'

describe('Component/Atom/Heading/Standard', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Standard type='h1'>Text</Standard>)
    const heading = screen.getByRole('heading')

    const expected = {
      className: style.heading.h1,
      localName: 'h1',
      textContent: 'Text',
    }

    Object.entries(expected).forEach((expected) => {
      expect(heading).toHaveProperty(...expected)
    })
  })

  describe.each<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>([
    'h1', 
    'h2', 
    'h3', 
    'h4', 
    'h5'
  ])('when passing the type as %s', (type) => {

    it('renders with the correct attributes', () => {

      const screen = render(<Standard type={type}>Testing {type}</Standard>)
      const heading = screen.getByRole('heading')
  
      const expected = {
        className: style.heading[type],
        localName: type,
        textContent: `Testing ${type}`,
      }
  
      Object.entries(expected).forEach((expected) => {
        expect(heading).toHaveProperty(...expected)
      })
    })
  })
})

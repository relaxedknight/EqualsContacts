import { fireEvent, render } from '@testing-library/react'

import { Atom } from '@Components'

import { Icon } from './Icon'
import * as style from './Icon.css'
import * as Type from './Icon.type'

describe('Components/Atom/Button/Icon', () => {

  describe.each<Type.Prop['icon']>([
    'Bin',
    'Eye',
    'Pen'
  ])('when type is %s', (type) => {

    it('renders with the correct attributes', () => {

      const screen = render(<Icon 
        alt='Alt' 
        icon={type} 
        onClick={() => null} 
        testId='Test' />
      )
      const button = screen.getByTestId('Test')

      const expected = {
        className: expect.stringContaining(style.container),
        localName: 'button',
        type: 'button'
      }
      
      expect(button).toEqual(expect.objectContaining(expected))
    })

    it(`renders the ${type} icon as a child`, () => {

      const expected = (() => {

        const Icon = Atom.Icon[type]
        const screen = render(<Icon alt='Alt' />)
        const image = screen.getByRole('img')

        screen.unmount()

        return image
      })()

      const screen = render(<Icon 
        alt='Alt' 
        icon={type} 
        onClick={() => null} 
        testId='Test' />
      )
      const icon = screen.getByRole('img')

      expect(icon).toEqual(expected)
    })

    it('fires the onClick handler when click', () => {

      const handler = jest.fn()
      const screen = render(<Icon 
        alt='Alt' 
        icon={type} 
        onClick={() => handler()} 
        testId='Test' />
      )
      const button = screen.getByRole('button')

      fireEvent.click(button)

      expect(handler).toHaveBeenCalledWith()
    })
  })
})

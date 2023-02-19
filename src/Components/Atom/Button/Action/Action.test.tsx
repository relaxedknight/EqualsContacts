import { fireEvent, render } from '@testing-library/react'

import { className } from '@library'

import { Action } from './Action'
import * as style from './Action.css'
import * as Type from './Action.type'

const prop: Type.Prop = {
  children: 'Text',
  onClick: jest.fn(),
  testId: 'Button'
}

describe('Component/Atoms/Button/Cancel', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Action {...prop} />)
    const button = screen.getByRole('button')

    const expected = {
      className: style.container.standard,
      textContent: prop.children,
      type: 'button'
    }

    expect(button).toEqual(expect.objectContaining(expected))
  })

  it('executes the onClick callback', () => {
    
    const screen = render(<Action {...prop} />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(prop.onClick).toHaveBeenCalledTimes(1)
  })

  describe('optional prop', () => {

    describe('className', () => {

      it('renders the passed className with the default className', () => {

        const newClassName = 'newClassName'
        const screen = render(<Action {...prop} className={newClassName} />)
        const button = screen.getByRole('button')

        const expected = className.format(style.container.standard, newClassName)
    
        expect(button).toHaveProperty('className', expected)
      })
    })

    describe('type', () => {

      it.each<Type.Prop['type']>([
        'button', 
        'reset',
        'submit'
      ])('renders %s when passed', (type) => {

        const screen = render(<Action {...prop} type={type} />)
        const button = screen.getByRole('button')
  
        expect(button).toHaveProperty('type', type)
      })
    })
  })
})

import { fireEvent, render, waitFor } from '@testing-library/react'

import { Standard } from './Standard'
import * as style from './Standard.css'

const Component = 'div'

const prop = {
  children: <Component>Children</Component>,
  header: <Component>Header</Component>,
  onView: jest.fn(),
  onEdit: jest.fn(),
  onDelete: jest.fn(),
  testId: 'Card'
}

describe('Components/Molecule/Card/Standard', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<Standard {...prop} />)
    const container = screen.getByTestId(prop.testId)

    const expected = {
      className: style.container
    }

    expect(container).toEqual(expect.objectContaining(expected))
  })

  describe('header', () => {

    it('renders correctly', () => {

      const screen = render(<Standard {...prop} />)
      const child = screen.getByText('Header')
      const action = {
        view: screen.getByTestId('ViewButton'),
        edit: screen.getByTestId('EditButton'),
        delete: screen.getByTestId('DeleteButton')
      }

      const expected = {
        container: {
          className: style.header
        },
        action: {
          view: {
            type: 'button'
          },
          edit: {
            type: 'button'
          },
          delete: {
            type: 'button'
          }
        }
      }
  
      expect(child.parentElement).toEqual(expect.objectContaining(expected.container))

      Object.entries(action).forEach(([name, element]) => {

        expect(element).toEqual(expect.objectContaining(expected.action[name]))
      })
    })

    describe('events', () => {

      describe('on mouse event', () => {

        it.each`
          event             | className
          ${'mouseEnter'}   | ${style.action.show}
          ${'mouseLeave'}   | ${style.action.hidden}
        `('has the correct className on $event', async ({ event, className }) => {
    
          const screen = render(<Standard {...prop} />)
          const container = screen.getByTestId('CardStandardActions')
    
          fireEvent[event](container)
    
          await waitFor(() => {
    
            expect(container).toHaveProperty('className', className)
          })
        })
      })

      describe('on click event', () => {

        it.each`
          testId          | handler
          ${'ViewButton'} | ${prop.onView}
        `('$testId calls the handler when clicked', ({ testId, handler }) => {

          const screen = render(<Standard {...prop} />)
          const action = screen.getByTestId(testId)
    
          fireEvent.click(action)

          expect(handler).toHaveBeenCalledTimes(1)
        })
      })
    })
  })

  describe('children', () => {

    it('renders correctly', () => {

      const screen = render(<Standard {...prop} />)
      const child = screen.getByText('Children')

      expect(child.parentElement).toHaveProperty('className', style.content)
    })
  })
})

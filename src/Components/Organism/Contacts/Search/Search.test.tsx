import { fireEvent, render } from '@testing-library/react'

import { Context } from '@Components'

import { Search } from './Search'
import * as style from './Search.css'

describe('Components/Organism/Contacts/Search', () => {

  const mock = jest.fn()

  const Component  = () => {

    const store = Context.Contacts.context()

    return <Context.Contacts.Provider value={{
      ...store,
      filter: {
        ...store.filter,
        set: mock
      }
    }}>
      <Search />
    </Context.Contacts.Provider>
  }

  it('renders with the correct attributes', () => {

    const screen = render(<Component />)
    const container = screen.getByTestId('ContactsSearch')
    const label = screen.getByText('Search Contacts')
    const input = screen.getByLabelText('Search Contacts')

    const expected = {
      container: {
        className: expect.stringContaining(style.container)
      },
      label: {
        className: expect.stringContaining(style.label),
        htmlFor: 'ContactsSearch'
      },
      input: {
        className: expect.stringContaining(style.input),
        id: 'ContactsSearch',
        placeholder: 'Search Contacts...',
        type: 'text'
      }
    }

    expect(container).toEqual(expect.objectContaining(expected.container))
    expect(label).toEqual(expect.objectContaining(expected.label))
    expect(input).toEqual(expect.objectContaining(expected.input))
  })

  it('calls the onChange handler', () => {

    const screen = render(<Component />)
    const input = screen.getByLabelText('Search Contacts')

    fireEvent.change(input, { target: {
      value: 'abc'
    }})

    expect(mock).toHaveBeenCalledWith('abc')
  })
})

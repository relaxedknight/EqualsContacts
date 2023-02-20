import { render } from '@testing-library/react'

import { contacts } from '@fixture'
import { hook } from '@library'

import { context, Provider } from './Provider'
import { store } from '../store/store'

const onMount = jest.fn()

describe('Components/Context/Contacts/Provider', () => {

  it('provides Contacts context', () => {

    const Component = () => {

      const value = store()

      return <Provider value={{
        ...value,
        all: {
          ...value.all,
          value: contacts.all
        }
      }}>
        <Consumer />
      </Provider>
    }

    const Consumer = () => {

      const contacts = context()

      hook.onMount(() => {

        onMount(contacts)
      })

      return null
    }

    render(<Component />)

    expect(onMount).toHaveBeenCalledWith(expect.objectContaining({
      all: expect.objectContaining({
        value: contacts.all
      }),
      edit: expect.objectContaining({
        value: undefined
      }),
      filter: expect.objectContaining({
        value: '',
      })
    }))
  })
})

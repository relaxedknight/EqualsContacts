import { fireEvent, render, waitFor } from '@testing-library/react'

import { contacts as fixture } from '@fixture'
import { hook } from '@library'

import { store } from './store'

const mock = {
  onMount: jest.fn(),
  onFilter: jest.fn(),
  onSet: jest.fn()
}

describe('Components/Context/Contacts/store', () => {

  describe('state - all', () => {

    it('initially has an empty array as the value', () => {

      const Component = () => {

        const contacts = store()
      
        hook.onMount(() => {
      
          mock.onMount(contacts.all.value)
        })
      
        return null
      }

      render(<Component />)

      expect(mock.onMount).toHaveBeenCalledWith([])
    })

    describe('set', () => {

      it('sets the value to the passed array', () => {

        const Component = () => {

          const contacts = store()

          hook.onUpdate(() => {

            contacts.all.value.length && mock.onSet(contacts.all.value)
          }, [contacts.all.value])
        
          return <div onClick={() => contacts.all.set(fixture.all)}>Click</div>
        }
        
        const screen = render(<Component />)
        const element = screen.getByText('Click')

        fireEvent.click(element)

        expect(mock.onSet).toHaveBeenCalledWith(fixture.all)
      })

      it('appends the passed value to the value', () => {

        const Component = () => {

          const contacts = store()

          hook.onUpdate(() => {

            contacts.all.value.length && mock.onSet(contacts.all.value)
          }, [contacts.all.value])
        
          return <div onClick={() => contacts.all.set(fixture.single)}>Click</div>
        }
        
        const screen = render(<Component />)
        const element = screen.getByText('Click')

        fireEvent.click(element)

        expect(mock.onSet).toHaveBeenCalledWith([fixture.single])
      })
    })

    describe('state - filter', () => {

      it('returns all the contacts if filter value is an empty string', () => {

        const Component = () => {

          const contacts = store()

          hook.onMount(() => {

            contacts.all.set(fixture.all)
          })
        
          return <div onClick={() => mock.onFilter(contacts.all.filtered)}>Click</div>
        }

        const screen = render(<Component />)
        const element = screen.getByText('Click')

        fireEvent.click(element)

        expect(mock.onFilter).toHaveBeenCalledWith(fixture.all)
      })

      it('returns the filtered contacts if filter value is a string', () => {

        const Component = () => {

          const contacts = store()

          hook.onMount(() => {

            contacts.all.set(fixture.all)
            contacts.filter.set(fixture.all[0].name)
          })
        
          return <div onClick={() => mock.onFilter(contacts.all.filtered)}>Click</div>
        }

        const element = render(<Component />).getByText('Click')

        fireEvent.click(element)

        expect(mock.onFilter).toHaveBeenCalledWith(fixture.all.slice(0, 1))
      })
    })
  })

  describe('state - edit', () => {

    it('initially has undefined as the value', () => {

      const Component = () => {

        const contacts = store()

        hook.onMount(() => {

          mock.onMount(contacts.edit.value)
        })
      
        return null
      }

      render(<Component />)

      expect(mock.onMount).toHaveBeenCalledWith(undefined)
    })

    it('updates the value when set is called', () => {

      const Component = () => {

        const contacts = store()

        hook.onUpdate(() => {

          contacts.edit.value && mock.onSet(contacts.edit.value)
        }, contacts.edit.value)
      
        return <div onClick={() => contacts.edit.set(fixture.single)}>Click</div>
      }

      const element = render(<Component />).getByText('Click')

      fireEvent.click(element)

      expect(mock.onSet).toHaveBeenCalledWith(fixture.single)
    })
  })

  describe('filter', () => {

    it('initially has an empty string as the value', () => {

      const Component = () => {

        const contacts = store()

        hook.onMount(() => {

          mock.onMount(contacts.filter.value)
        })
      
        return null
      }

      render(<Component />)

      expect(mock.onMount).toHaveBeenCalledWith('')
    })

    it('updates the value when set is called', async () => {

      const Component = () => {

        const contacts = store()

        hook.onUpdate(() => {

          contacts.filter.value && mock.onSet(contacts.filter.value)
        }, contacts.filter.value)
      
        return <div onClick={() => contacts.filter.set(fixture.single.name)}>Click</div>
      }

      const element = render(<Component />).getByText('Click')

      fireEvent.click(element)

      await waitFor(() => {

        expect(mock.onSet).toHaveBeenCalledWith(fixture.single.name)
      })
    })
  })
})

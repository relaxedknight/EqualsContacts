import { fireEvent, render, waitFor, within } from '@testing-library/react'

import { Context } from '@Components'
import { contacts } from '@fixture'
import { date, phone } from '@library'

import { List } from './List'
import * as style from './List.css'

describe('Components/Organism/Contacts/List', () => {

  it('renders with the correct attributes', () => {

    const screen = render(<List />)
    const list = screen.getByRole('list')

    const expected = {
      className: expect.stringContaining(style.container),
    }

    expect(list).toEqual(expect.objectContaining(expected))
    expect({
      ...list.dataset
    }).toEqual({
      testid: 'ContactsList'
    })
  })

  describe('when passed provided with contacts', () => {

    const ListWithProvider = () => {

      const store = Context.Contacts.context()
    
      return <Context.Contacts.Provider value={{
        ...store,
        all: {
          ...store.all,
          filter: () => contacts.all
        }
      }}>
        <List />
      </Context.Contacts.Provider>
    }

    it('renders each contact as a listitem', () => {

      const screen = render(<ListWithProvider />)
      const listitems = screen.getAllByRole('listitem')

      screen.debug()

      expect(listitems).toHaveLength(contacts.all.length)
    })

    it('renders each contact with the correct testId', () => {

      const screen = render(<ListWithProvider />)

      Object.keys(contacts.all).forEach((key) => {

        screen.getByTestId(`Contact${key}`)
      })
    })

    it('initially renders with the contacts avatar, name & action buttons', () => {

      const screen = render(<ListWithProvider />)
      const listitems = screen.getAllByRole('listitem')

      listitems.map((listitem) => within(listitem)).forEach((listitem, i) => {

        const contact = contacts.all[i]
        const avatar = screen.getByAltText(contact.name)
        const text = screen.getByText(contact.name)

        const expected = {
          avatar: {
            className: expect.stringContaining(style.avatar),
            src: expect.stringContaining(
              encodeURIComponent(contact.avatar)
            )
          },
          text: {
            className: expect.stringContaining(style.name),
            localName: 'span'
          },
        }

        Object.entries(expected.avatar).forEach((expected) => {
          expect(avatar).toHaveProperty(...expected)
        })

        Object.entries(expected.text).forEach((expected) => {
          expect(text).toHaveProperty(...expected)
        })

        listitem.getByTestId('ViewButton')
        listitem.getByTestId('EditButton')
        listitem.getByTestId('DeleteButton')
      })
    })

    it('renders contact detail when view button is clicked', () => {

      const screen = render(<ListWithProvider />)
      const listitems = screen.getAllByRole('listitem')

      listitems.map((listitem) => within(listitem)).forEach((listitem, i) => {

        const contact = contacts.all[i]

        const view = listitem.getByTestId('ViewButton')

        fireEvent.click(view)

        const container = {
          email: within(listitem.getByText('Email').parentElement),
          phone: within(listitem.getByText('Phone').parentElement),
          birthday: within(listitem.getByText('Birthday').parentElement),
          createdAt: within(listitem.getByText('Created at').parentElement)
        }

        screen.debug()

        contact.birthday = date.build({
          date: contact.birthday
        }).format('{day}/{month}/{year}')
        contact.createdAt = date.build({
          date: contact.createdAt
        }).format('{day}/{month}/{year} {hour}:{minute}')

        const element = {
          email: container.email.getByText(contact.email),
          phone: container.phone.getByText(phone.format(contact.phone)),
          birthday: container.birthday.getByText(contact.birthday),
          createdAt: container.createdAt.getByText(contact.createdAt)
        }
        
        const expected = {
          email: {
            href: `mailto:${contact.email}`,
            title: `Email ${contact.name}`
          },
          phone: {
            href: `tel:${contact.phone}`,
            title: `Phone ${contact.phone}`
          },

        }

        expect(element.email).toEqual(expect.objectContaining(expected.email))
        expect(element.phone).toEqual(expect.objectContaining(expected.phone))
      })
    })
  })
})

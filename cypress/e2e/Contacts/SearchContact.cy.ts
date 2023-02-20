import { contacts } from '@fixture'
import { date, phone } from '@library'

const searchable = contacts.all.map(({ id: _, ...contact }) => ({
  ...contact,
  createdAt: date.build({
    date: contact.createdAt
  }).format('{day}/{month}/{year} {hour}:{minute}'),
  birthday: date.build({
    date: contact.birthday
  }).format('{day}/{month}/{year} {hour}:{minute}'),
  phone: phone.format(contact.phone)
}))

describe('SearchContact', () => {

  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('filters the contact list for each property', () => {

    searchable.forEach((contact) => {

      Object.values(contact).forEach((value) => {

        cy['get/byTestId']('ContactsSearch').within(() => {

          cy.get('input').type(value)
        })
    
        cy['get/byTestId']('ContactsList')
          .children()
          .should('have.length', 1).contains(contact.name)

        cy['get/byTestId']('ContactsSearch').within(() => {
          
          cy.get('input').clear()
        })
      })
    })
  })
})

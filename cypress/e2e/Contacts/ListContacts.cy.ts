import { contacts } from '@fixture'

describe('AddContact', () => {
  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('renders each contact in the response in the contact list', () => {

    cy.wait('@GETContacts')

    contacts.all.forEach((contact, i) => {

      cy['assertContact/CardHeader'](`Contact${i}`, i)
    })
  })
})

import { contacts } from '@fixture'

describe('AddContact', () => {
  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('renders each contact in the response in the contact list', () => {

    cy.wait('@GETContacts')

    contacts.all.forEach((contact, i) => {

      cy['assert/Contact/CardHeader'](`Contact${i}`, i)
      cy['assert/Contact/CardDetail'](`Contact${i}`, i)
    })
  })
})

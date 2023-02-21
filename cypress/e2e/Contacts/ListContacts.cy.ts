import { contacts } from '@fixture'

describe('AddContact', () => {

  it('renders each contact in the response in the contact list', () => {

    cy['app/hasLoaded']()

    cy.wait('@GETContacts')

    contacts.all.forEach((contact, i) => {

      cy['assert/Contact/Card']({
        contact,
        testId: `Contact${i}`
      })
    })
  })

  it("renders an error message if the contacts can't be retrieved", () => {

    cy.visit('http://localhost:3000')

    cy['interceptor/Contact/Get']({
      interceptorBody: null
    })

    cy.wait('@GETContacts')

    cy.contains('There was an issue retrieving the contacts')
  })
})

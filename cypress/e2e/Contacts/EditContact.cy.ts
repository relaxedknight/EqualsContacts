import { contacts } from '@fixture'

describe('EditContact', () => {
  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('edits a contact successfully', () => {

    contacts.all.slice(0, 1).forEach((contact, i, arr) => {

      const updated = {
        ...contact,
        name: `New Name ${i + 1}`,
        email: `newEmail${i + 1}@example.com`,
      }

      cy['get/byTestId'](`Contact${i}`).within(() => {

        cy.get('header').trigger('mouseover')
        cy['get/byTestId']('EditButton').click()
      })

      cy['get/byTestId']('ContactName').within(() => {
  
        cy.get('input').should('have.value', contact.name).clear().type(updated.name)
      })

      cy['get/byTestId']('ContactEmail').within(() => {
  
        cy.get('input').should('have.value', contact.email).clear().type(updated.email)
      })

      cy['interceptor/Contact/Put'](updated)

      cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()

      cy.wait('@PUTContact')
      
      cy['assert/Contact/Card']({
        contact: updated,
        testId: `Contact${i}`
      })
    })
  })
})

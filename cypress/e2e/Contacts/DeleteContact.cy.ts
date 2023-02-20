import { contacts } from '@fixture'

describe('DeleteContact', () => {

  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('deletes a contact successfully', () => {

    contacts.all.forEach((contact) => {

      cy['interceptor/Contact/Delete'](contact)
  
      cy['get/byTestId'](`Contact0`).within(() => {
  
        cy.get('header').trigger('mouseover')
        cy['get/byTestId']('DeleteButton').click()
      })

      cy.wait('@DELETEContact')
  
      cy.contains(contact.name).should('not.exist')
    })
  })
})

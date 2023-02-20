import { contacts } from '@fixture'

describe('DeleteContact', () => {

  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('deletes a contact successfully', () => {

    contacts.all.forEach((contact) => {

      cy.intercept({
        method: 'DELETE',
        url: '/api/v1/contacts/**'
      }, {
        body: contact
      })
  
      cy['get/byTestId'](`Contact0`).within(() => {
  
        cy.get('header').trigger('mouseover')
        cy['get/byTestId']('DeleteButton').click()
      })
  
      cy.contains(contact.name).should('not.exist')
    })
  })
})

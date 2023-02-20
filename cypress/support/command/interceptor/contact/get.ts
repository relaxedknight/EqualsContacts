import { contacts } from '@fixture'

Cypress.Commands.add('interceptor/Contact/Get', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/v1/contacts'
  }, {
    body: contacts.all
  }).as('GETContacts')
})

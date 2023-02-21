import { contacts } from '@fixture'

Cypress.Commands.add('interceptor/Contact/Get', (option) => {

  cy.intercept({
    method: 'GET',
    url: '/api/v1/contacts'
  }, {
    body: option?.interceptorBody !== null ? contacts.all : undefined
  }).as('GETContacts')
})

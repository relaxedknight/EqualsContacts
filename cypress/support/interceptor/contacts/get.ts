import { contacts } from '@fixture'

beforeEach(() => {

  cy.intercept({
    method: 'GET',
    url: '/api/v1/contacts'
  }, {
    body: contacts.all
  }).as('GETContacts')
})

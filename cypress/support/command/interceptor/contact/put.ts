Cypress.Commands.add('interceptor/Contact/Put', (body) => {

  cy.intercept({
    method: 'PUT',
    url: '/api/v1/contacts/**',
  }, { body }).as('PUTContact')
})

Cypress.Commands.add('interceptor/Contact/Delete', (body) => {

  cy.intercept({
    method: 'DELETE',
    url: '/api/v1/contacts/**',
  }, { body }).as('DELETEContact')
})

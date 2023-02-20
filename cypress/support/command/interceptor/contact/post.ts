Cypress.Commands.add('interceptor/Contact/Post', (body) => {

  cy.intercept({
    method: 'POST',
    url: '/api/v1/contacts',
  }, { body }).as('POSTContact')
})

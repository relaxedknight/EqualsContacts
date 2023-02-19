Cypress.Commands.add('app/hasLoaded', () => {

  cy.visit('http://localhost:3000')

  cy['get/byTestId']('Splash').should('be.visible')
  cy['get/byTestId']('Splash').should('not.exist')
  cy['get/byTestId']('ContactsBoard').should('exist').and('be.visible')

  cy.get('h1').should('have.text', 'Equals Contacts')
})

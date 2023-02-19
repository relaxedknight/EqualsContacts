Cypress.Commands.add('appHasLoaded', () => {

  cy.visit('http://localhost:3000')

  cy.getByTestId('Splash').should('be.visible')
  cy.getByTestId('Splash').should('not.exist')
  cy.getByTestId('ContactsBoard').should('exist').and('be.visible')

  cy.get('h1').should('have.text', 'Equals Contacts')
})

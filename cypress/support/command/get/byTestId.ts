Cypress.Commands.add('get/byTestId', (testId: string) => {
  
  return cy.get(`[data-testid=${testId}]`)
})

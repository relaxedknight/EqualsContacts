/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    appHasLoaded(): void
    getByTestId(testId: string): Chainable
    getFormField(input: { testId: string, child: 'input'}): Chainable
  }
}

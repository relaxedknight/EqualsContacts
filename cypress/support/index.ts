/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    'app/hasLoaded'(): void
    'get/byTestId'(testId: string): Chainable
    ['assertContact/CardHeader'](testId: string, index: number | 'single'): Chainable
  }
}

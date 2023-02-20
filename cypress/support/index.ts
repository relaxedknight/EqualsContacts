/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    'app/hasLoaded'(): void
    'get/byTestId'(testId: string): Chainable
    ['assert/Contact/CardHeader'](testId: string, index: number | 'single'): Chainable
    ['assert/Contact/CardDetail'](testId: string, index: number | 'single'): Chainable
  }
}

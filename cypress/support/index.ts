/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    'app/hasLoaded'(): void
    'get/byTestId'(testId: string): Chainable
    ['assert/Contact/Card'](input: {
      contact: Record<string, unknown>
      testId: string
    }): void
    ['assert/Contact/CardHeader'](input: {
      contact: Record<string, unknown>
      testId: string
    }): void
    ['assert/Contact/CardDetail'](input: {
      contact: Record<string, unknown>
      testId: string
    }): void
  }
}

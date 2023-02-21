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
    ['fill/form/contact'](input: {
      contact: Record<string, unknown>
    }, option?: {
      intercerptorBody?: Record<string, unknown> | null
    }): void
    ['interceptor/Contact/Delete'](body: Record<string, unknown>): void
    ['interceptor/Contact/Get'](option?: {
      interceptorBody?: Record<string, unknown> | null
    }): void
    ['interceptor/Contact/Post'](body?: Record<string, unknown>): void
    ['interceptor/Contact/Put'](body: Record<string, unknown>): void
  }
}

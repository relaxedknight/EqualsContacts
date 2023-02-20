import type { ServiceType } from '@library'

Cypress.Commands.add('assert/Contact/Card', (input: {
  contact: ServiceType.ContactsType.Schema
  testId: string
}) => {

  cy['assert/Contact/CardHeader'](input)
  cy['assert/Contact/CardDetail'](input)
})

import type { ServiceType } from '@library'
import { contacts } from '@fixture'

Cypress.Commands.add('assert/Contact/CardHeader', ({ contact, testId }: {
  contact: ServiceType.ContactsType.Schema
  testId: string
}) => {

  cy['get/byTestId'](testId)
    .find(`img[alt="${contact.name}"]`)
    .should((el) => {

      const encoded = encodeURIComponent(contact.avatar)
      const regex = new RegExp(`^/_next/image\\?url=${encoded}`)

      expect(el.attr('src')).to.match(regex)
    })
})

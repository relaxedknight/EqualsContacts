import { contacts } from '@fixture'

Cypress.Commands.add('assert/Contact/CardHeader', (testId, index) => {

  const contact = index === 'single' ? contacts.single : contacts.all[index]

  cy['get/byTestId'](testId)
    .find(`img[alt="${contact.name}"]`)
    .should((el) => {

      const encoded = encodeURIComponent(contact.avatar)
      const regex = new RegExp(`^/_next/image\\?url=${encoded}`)

      expect(el.attr('src')).to.match(regex)
    })
})

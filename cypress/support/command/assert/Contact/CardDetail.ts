import { contacts } from '@fixture'
import { date, phone } from '@library'

Cypress.Commands.add('assert/Contact/CardDetail', (testId, index) => {

  const contact = index === 'single' ? contacts.single : contacts.all[index]

  contact.phone = phone.format(contact.phone)

  cy['get/byTestId'](testId).within(() => {

    cy.get('header').trigger('mouseover')

    cy['get/byTestId']('ViewButton').click()

    cy.contains(contact.email)
    cy.contains('Email')
      .next()
      .contains(contact.email)
      .should('have.attr', 'href', contact.email)
      .should('have.attr', 'title', `Email ${contact.name}`)

    cy.contains('Phone')
      .next()
      .contains(contact.phone)
      .should('have.attr', 'href', `tel:${contact.phone}`)
      .should('have.attr', 'title', `Phone ${contact.phone}`)

    cy.contains('Birthday')
      .next()
      .should('have.text', date.build({
        date: contact.dob
      }).format('{day}/{month}/{year}'))

    cy.contains('Created at')
      .next()
      .should('have.text', date.build({
        date: contact.createdAt
      }).format('{day}/{month}/{year} {hour}:{minute}'))
  })
})

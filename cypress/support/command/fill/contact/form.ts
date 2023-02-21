import type { ServiceType } from '@library'
import { date, phone } from '@library'

Cypress.Commands.add('fill/form/contact', ({ contact }: {
  contact: ServiceType.ContactsType.Schema
}, option) => {

  cy['get/byTestId']('ContactName').within(() => {
    cy.get('input').invoke('removeAttr', 'required')
  })
  cy['get/byTestId']('ContactBirthday').within(() => {
    cy.get('input').invoke('removeAttr', 'required')
  })
  cy['get/byTestId']('ContactAvatar').within(() => {
    cy.get('input').invoke('removeAttr', 'required')
  })
  cy['get/byTestId']('ContactEmail').within(() => {
    cy.get('input').invoke('removeAttr', 'required')
  })
  cy['get/byTestId']('ContactPhone').within(() => {
    cy.get('input').invoke('removeAttr', 'required')
  })

  cy['get/byTestId']('ContactName').within(() => {
    cy.get('input').type(contact.name)
  })

  cy['get/byTestId']('ContactBirthday').within(() => {
    cy.get('input').type(date.build({
      date: contact.birthday
    }).format('{year}-{month}-{day}'))
  })

  cy['get/byTestId']('ContactAvatar').within(() => {
    cy.get('input').type(contact.avatar)
  })

  cy['get/byTestId']('ContactEmail').within(() => {
    cy.get('input').type(contact.email)
  })

  cy['get/byTestId']('ContactPhone').within(() => {
    cy.get('input').type(phone.format(contact.phone))
  })

  cy['interceptor/Contact/Post'](option?.intercerptorBody || 
    option?.intercerptorBody !== null ? contact : null)
})

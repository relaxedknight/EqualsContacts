import { contacts } from '@fixture'
import { date } from '@library'

describe('AddContact', () => {
  beforeEach(() => {

    cy['app/hasLoaded']()
  })

  it('adds a contact successfully', () => {

    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()

    const contact = contacts.single

    contact.birthday = date.build({
      date: contact.birthday
    }).format('{year}-{month}-{day}')

    contact.phone = contact.phone.match(/\d{3}.\d{3}.\d{4}/)[0]

    cy.intercept({
      method: 'POST',
      url: '/api/v1/contacts',
    }, {
      body: contact
    }).as('AddedContact')

    cy['get/byTestId']('ContactName').within(() => {
      cy.get('input').type(contact.name)
    })

    cy['get/byTestId']('ContactBirthday').within(() => {
      cy.get('input').type(contact.birthday)
    })

    cy['get/byTestId']('ContactAvatar').within(() => {
      cy.get('input').type(contact.avatar)
    })

    cy['get/byTestId']('ContactEmail').within(() => {
      cy.get('input').type(contact.email)
    })

    cy['get/byTestId']('ContactPhone').within(() => {
      cy.get('input').type(contact.phone)
    })

    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()
    cy.wait('@AddedContact').then(({ request, response }) => {

      const { createdAt: requestCreatedAt, ...requestBody } = request.body

      expect(request.headers).to.deep.include({
        'content-type': 'application/json'
      })

      expect(requestBody).to.deep.equal({
        birthday: new Date(contact.birthday).toISOString(),
        name: contact.name,
        avatar: contact.avatar,
        email: contact.email,
        phone: contact.phone
      })
      
      expect(requestCreatedAt).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)

      expect(response.headers).to.deep.include({
        'content-type': 'application/json'
      })

      expect(response.body).to.deep.equal(contact)

      cy['assert/Contact/Card']({
        contact,
        testId: `Contact${contacts.all.length}`
      })
    })
  })
})

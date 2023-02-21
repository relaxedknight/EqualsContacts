import { contacts } from '@fixture'
import { date, phone } from '@library'

describe('AddContact', () => {
  beforeEach(() => {

    cy['app/hasLoaded']()
    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()
  })

  it('renders an message if the request fails', () => {

    cy['fill/form/contact']({
      contact: contacts.single
    }, {
      intercerptorBody: null
    })

    cy['interceptor/Contact/Post']()
    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()

    cy.contains('There was an issue creating the contact')
  })

  it('validates the form', () => {

    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()

    cy['get/byTestId']('ContactName').contains('Name is required')
    cy['get/byTestId']('ContactBirthday').contains('A date of birth is required')
    cy['get/byTestId']('ContactAvatar').contains('An Avatar URL is required')
    cy['get/byTestId']('ContactEmail').contains('An email is required')
    cy['get/byTestId']('ContactPhone').contains('A phone number is required')

    cy['get/byTestId']('ContactBirthday').within(() => {
      cy.get('input').type(date.build({
        date: new Date()
      }).format('{year}-{month}-{day}'))
    }).contains('Date of birth must be in the past')

    cy['get/byTestId']('ContactAvatar').within(() => {
      cy.get('input').type('Not a URL')
    }).contains('Must be a .jpg image')

    cy['get/byTestId']('ContactEmail').within(() => {
      cy.get('input').type('Not an email address')
    }).contains('Not a valid email')

    cy['get/byTestId']('ContactPhone').within(() => {
      cy.get('input').type('Not a phone number')
    }).contains('Phone number must be in the correct format')
  })

  it('adds a contact successfully', () => {

    const contact = contacts.single

    contact.birthday = date.build({
      date: contact.birthday
    }).format('{year}-{month}-{day}')

    contact.phone = contact.phone.match(/\d{3}.\d{3}.\d{4}/)[0]

    cy['fill/form/contact']({ contact })

    cy['interceptor/Contact/Post'](contact)
    cy['get/byTestId']('Contact-Add-UpdateAddCreate').click()
    
    cy.wait('@POSTContact').then(({ request, response }) => {

      const { createdAt: requestCreatedAt, ...requestBody } = request.body

      expect(request.headers).to.deep.include({
        'content-type': 'application/json'
      })

      expect(requestBody).to.deep.equal({
        birthday: new Date(contact.birthday).toISOString(),
        name: contact.name,
        avatar: contact.avatar,
        email: contact.email,
        phone: phone.format(contact.phone)
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

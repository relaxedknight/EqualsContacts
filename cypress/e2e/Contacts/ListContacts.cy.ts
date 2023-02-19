import { contacts } from '@fixture'

describe('AddContact', () => {
  beforeEach(() => {

    cy.appHasLoaded()
  })

  it('renders each contact in the response in the contact list', () => {

    cy.wait('@GETContacts')

    contacts.all.forEach((contact, i) => {

      cy.getByTestId(`Contact${i}`)
        .contains(contact.name)

      cy.getByTestId(`Contact${i}`)
        .find(`img[alt="${contact.name}"]`)
        .should((el) => {

          const encoded = encodeURIComponent(contact.avatar)
          const regex = new RegExp(`^/_next/image\\?url=${encoded}`)

          expect(el.attr('src')).to.match(regex)
        })
    })
  })
})

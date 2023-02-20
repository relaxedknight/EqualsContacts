beforeEach(() => {

  cy.intercept({
    method: 'GET',
    url: '**.jpg'
  }, { fixture: 'image/avatar.jpg' })
})

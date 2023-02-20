import { contacts } from '@fixture'

import { format } from './format'

describe('library/phone/format', () => {

  it('formats a passed phone number', () => {

    const formatted = format(contacts.single.phone)

    expect(formatted).toMatch(/^\d{3}-\d{3}-\d{4}$/)
  })
})

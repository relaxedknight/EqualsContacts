import { email } from './email'

describe('regex/email', () => {

  it("fails when tested against a value that isn't an email", () => {

    const result = email.test('Not an email')

    expect(result).toBe(false)
  })

  it('passes when tested against a value that is an email', () => {

    const result = email.test('example@testing.com')

    expect(result).toBe(true)
  })
})

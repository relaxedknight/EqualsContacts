import { phone } from './phone'

describe('regex/email', () => {

  it("fails when tested against a value that isn't a phone number", () => {

    const result = phone.test('Not a phone number')

    expect(result).toBe(false)
  })

  it("passes when tested against a value that is a phone number", () => {

    const result = phone.test('123-456-7890')

    expect(result).toBe(true)
  })
})

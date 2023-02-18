import { handle } from './handle'

describe('lib/error', () => {

  it.each`
    Constructor | value                                       | expected
    ${Error}    | ${'An instance of Error occurred'}          | ${'An instance of Error occurred'}
    ${String}   | ${'A descriptive error message was passed'} | ${'A descriptive error message was passed'}
    ${String}   | ${''}                                       | ${'An unknown problem occurred'}
    ${undefined}| ${'A descriptive error message was passed'} | ${'A descriptive error message was passed'}
    ${undefined}| ${''}                                       | ${'An unknown problem occurred'}
  `('Sets the message as $expected', ({ Constructor, value, expected }) => {

    const error = handle(Constructor ? new Constructor(value) : value)

    expect(error).toEqual({
      ok: false,
      message: expected
    })
  })
})

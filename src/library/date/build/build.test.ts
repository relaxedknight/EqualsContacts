import { build } from './build'

describe('lib/date', () => {

  it('returns undefined when invalid date is passed', () => {

    const built = build({
      date: 'invalid'
    })

    expect(built).toBeUndefined()
  })

  describe.each`
    type        | Constructor
    ${'Date'}   | ${Date}
    ${'string'} | ${String}
  `('when date is passed as type $type', ({ Constructor }) => {

    describe.each`
      date                      | expectedFormat
      ${'2023-6-4 1:2:3'}       | ${'2023/06/04 01:02'}
      ${'2023-06-06 01:02:03'}  | ${'2023/06/06 01:02'}
    `('with $date as the value', ({ date, expectedFormat }) => {

      const { format, ...built } = build({
        date: new Constructor(date)
      }) || {}

      it('returns formatted date object', () => {
  
        const expected = {
          day: expect.stringMatching(/\d{2}/),
          month: expect.stringMatching(/\d{2}/),
          year: expect.stringMatching(/\d{4}/),
          hour: expect.stringMatching(/\d{2}/),
          minute: expect.stringMatching(/\d{2}/),
        }
    
        expect(built).toEqual(expected)
      })

      describe('function - format', () => {

        it(`formats the date as ${expectedFormat}`, () => {

          const formatted = format?.('{year}/{month}/{day} {hour}:{minute}')

          expect(formatted).toBe(expectedFormat)
        })
      })
    })
  })
})

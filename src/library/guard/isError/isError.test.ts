import { isError } from './isError'

import { error } from '@library'

describe('library/guard/isError', () => {

  it('returns true if passed an error', () => {

    const actual = isError(error.handle('error occurred'))

    expect(actual).toBe(true)
  })

  it('returns false if not passed an error', () => {

    const actual = isError('not an error')

    expect(actual).toBe(false)
  })
})

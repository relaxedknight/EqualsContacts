import { format } from './format'

describe('lib/className/format', () => {

  it('returns the parameters as a formatted className', () => {

    const classes = ['class1', 'class2']
    const result = format(...classes)

    expect(result).toBe(classes.join(' '))
  })

  it('removes the undefined parameters', () => {

    const classes = ['class1', 'class2']
    const result = format(classes[0], undefined, classes[1], undefined)

    expect(result).toBe(classes.join(' '))
  })
})

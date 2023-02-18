import { onPropertyName } from './onPropertyName'

describe('lib/event/transition/onPropertyName', () => {

  it('returns a function', () => {

    const result = onPropertyName({
      name: 'name',
      callback: jest.fn()
    })

    expect(typeof result).toBe('function')
  })

  it('executes the callback when the name matches the event property name', () => {

    const param = {
      name: 'name',
      callback: jest.fn()
    }

    const result = onPropertyName(param)

    result({
      propertyName: param.name
    })

    expect(param.callback).toHaveBeenCalledTimes(1)
  })
})

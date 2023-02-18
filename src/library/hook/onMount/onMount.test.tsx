import { render } from '@testing-library/react'

import { onMount } from './onMount'

const callback = {
  async: jest.fn().mockResolvedValue(null),
  sync: jest.fn()
}

const Component = () => {

  onMount(callback.sync)
  onMount(callback.async)

  return null
}

render(<Component />)

describe('lib/hook/onMount', () => {

  it('executes the syncronous callback', () => {

    expect(callback.sync).toHaveBeenCalledTimes(1)
    expect(callback.sync).toHaveReturned()
  })

  it('executes the asynchronous callback', () => {
    
    expect(callback.async).toHaveBeenCalledTimes(1)
    expect(callback.async).toHaveReturned()
  })
})

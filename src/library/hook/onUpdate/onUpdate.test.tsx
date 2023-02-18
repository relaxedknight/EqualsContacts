import { render } from '@testing-library/react'
import { useState } from 'react'

import { onMount } from '..'
import { onUpdate } from './onUpdate'

const callback = {
  async: jest.fn().mockResolvedValue(null),
  sync: jest.fn()
}

const Component = () => {

  const [state, setState] = useState(0)

  onUpdate(callback.sync, state)
  onUpdate(callback.async, state)

  onMount(() => { setState(1) })

  return null
}

render(<Component />)

describe('lib/hook/onUpdate', () => {

  it('executes the syncronous callback', () => {

    expect(callback.sync).toHaveBeenCalledTimes(2)
    expect(callback.sync).toHaveReturned()
  })

  it('executes the asynchronous callback', () => {
    
    expect(callback.async).toHaveBeenCalledTimes(2)
    expect(callback.async).toHaveReturned()
  })
})

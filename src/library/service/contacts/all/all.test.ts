import { contacts as contactsFixture } from '@fixture'

import { guard } from '@library'

import { all } from './all'
import { service } from '../service/service'

describe('lib/service/contacts/all', () => {

  it('calls the request with the correct data', async () => {
  
    const expected = {
      url: service.url,
      request: {
        body: undefined,
        headers: service.headers,
        method: 'GET'
      }
    }

    global.fetch = jest.fn()

    await all()

    expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
  })

  it('returns an array of contacts when successful', async () => {

    const contacts = contactsFixture

    global.fetch = jest.fn().mockResolvedValue({
      json: () => contacts
    })

    const resp = await all()
    const data = !guard.isError(resp) && resp.data

    expect(resp.ok).toBe(true)
    expect(data).toEqual(contacts)
  })

  it('returns an error object when unsuccessful', async () => {

    const error = new Error('There was an issue retrieving the contacts')

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(error)
    })

    const resp = await all()
    const message = guard.isError(resp) && resp.message

    expect(resp.ok).toBe(false)
    expect(message).toBe(error.message)
  })
})

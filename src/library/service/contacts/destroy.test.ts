import { contacts } from '@fixture'

import { service } from './service'
import { destroy } from './destroy'

describe('lib/service/contacts/destroy', () => {

  it('calls the request with the correct data', async () => {

    const expected = {
      url: service.url,
      request: {
        headers: service.headers,
        method: 'DELETE'
      }
    }

    global.fetch = jest.fn()

    await destroy(contacts.single)

    expect(global.fetch).toHaveBeenCalledWith(`${expected.url}/${contacts.single.id}`, expected.request)
  })

  it('returns the destroyed contact when successful', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(contacts.single)
    })

    const resp = await destroy(contacts.single)
    const data = 'data' in resp && resp.data

    expect(resp.ok).toBe(true)
    expect(data).toBe(contacts.single)
  })

  it('returns an error object when unsuccessful', async () => {

    const error = new Error('There was an issue destroying the contact')

    global.fetch = jest.fn().mockRejectedValue(error)

    const resp = await destroy(contacts.single)
    const message = 'message' in resp && resp.message

    expect(resp.ok).toBe(false)
    expect(message).toBe(error.message)
  })
})

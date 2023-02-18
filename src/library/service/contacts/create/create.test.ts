import { contacts } from '@fixture'

import { create } from './create'
import { service } from '../service/service'

describe('lib/service/contacts/create', () => {

  it('calls the request with the correct data', async () => {

    const { createdAt, birthday, ...rest } = contacts.single

    const expected = {
      url: service.url,
      request: {
        body: JSON.stringify({
          createdAt,
          birthday,
          ...rest
        }),
        headers: service.headers,
        method: 'POST'
      }
    }

    global.fetch = jest.fn()

    await create(contacts.single)

    expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
  })

  it('returns the created contact when successful', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(contacts.single)
    })

    const resp = await create(contacts.single)

    expect(resp).toEqual({
      ok: true,
      data: contacts.single
    })
  })

  it('returns an error object when unsuccessful', async () => {

    const error = new Error('There was an issue creating the contact')

    global.fetch = jest.fn().mockRejectedValue(error)

    const resp = await create(contacts.single)
    const message = 'message' in resp && resp.message

    expect(resp.ok).toBe(false)
    expect(message).toBe(error.message)
  })
})

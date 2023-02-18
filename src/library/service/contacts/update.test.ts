import { contacts } from '@fixture'

import { service } from './service'
import { update } from './update'

const updated = {
  ...contacts.single,
  name: 'Billy Bones'
}

describe('lib/service/contacts/update', () => {

  it('calls the request with the correct data', async () => {

    const expected = {
      url: service.url,
      request: {
        body: JSON.stringify({
          id: contacts.single.id,
          name: updated.name
        }),
        headers: service.headers,
        method: 'PUT'
      }
    }

    global.fetch = jest.fn()

    await update({
      id: contacts.single.id,
      name: updated.name
    })

    expect(global.fetch).toHaveBeenCalledWith(`${expected.url}/${contacts.single.id}`, expected.request)
  })

  it('returns the updated contact when successful', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(updated)
    })

    const resp = await update({
      id: contacts.single.id,
      name: updated.name
    })
    const data = 'data' in resp && resp.data

    expect(resp.ok).toBe(true)
    expect(data).toBe(updated)
  })

  it('returns an error object when unsuccessful', async () => {

    const error = new Error('There was an issue updating the contact')

    global.fetch = jest.fn().mockRejectedValue(error)

    const resp = await update(contacts.single)
    const message = 'message' in resp && resp.message

    expect(resp.ok).toBe(false)
    expect(message).toBe(error.message)
  })
})

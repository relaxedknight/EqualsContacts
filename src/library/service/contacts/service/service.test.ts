import { contacts } from '@fixture'

import { service } from './service'

describe('lib/service/contacts/endpoint', () => {

  const map = {
    method: {
      GET: {
        body: undefined
      },
      POST: {
        body: contacts.single,
      },
      PUT: {
        body: {
          name: contacts.single.name
        },
        id: contacts.single.id
      },
      DELETE: {
        body: undefined,
        id: contacts.single.id
      }
    }
  }

  describe.each<keyof typeof map.method>([
    'GET', 
    'POST', 
    'PUT', 
    'DELETE'
  ])('when consumed with method', (method) => {

    it('calls fetch with the correct parameters', () => {

      global.fetch = jest.fn()

      const request = map.method[method]

      service.consume({
        method,
        ...request
      })

      const expected = {
        url: `https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts${'id' in request ? `/${request.id}` : ''}`,
        request: {
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(request.body),
          method
        }
      }

      expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
    })
  })
})

import { build } from './build'

const common = {
  url: 'https://domain.com/api/v1/test',
  headers: {
    'content-type': 'application/json'
  }
}

const service = build<{
  id: string
  key1: string
  key2: string
}>({
  protocol: 'https',
  domain: 'domain.com',
  path: `/api/v1/test`,
  headers: common.headers
})

describe('lib/api', () => {

  beforeEach(() => {

    global.fetch = jest.fn()
  })

  it('calls fetch with body undefined when method is GET', async () => {

    const expected = {
      url: common.url,
      request: {
        body: undefined,
        headers: common.headers,
        method: 'GET'
      }
    }

    const a = await service.consume()

    expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
  })

  it('calls fetch with mandatory body when method is POST', async () => {

    const body = {
      key1: 'value1',
      key2: 'value2'
    }

    const method = 'POST'

    const expected = {
      url: common.url,
      request: {
        body: JSON.stringify(body),
        headers: common.headers,
        method
      }
    }

    await service.consume({
      method,
      body
    })

    expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
  })

  it('calls fetch with mandatory id property & optional Schema fields when method is PUT', async () => {

    const body = {
      key1: 'value1'
    }
    const id = '123'
    const method = 'PUT'

    const expected = {
      url: common.url,
      request: {
        body: JSON.stringify(body),
        headers: common.headers,
        method: 'PUT'
      }
    }

    await service.consume({
      method,
      id,
      body
    })

    expect(global.fetch).toHaveBeenCalledWith(`${expected.url}/${id}`, expected.request)
  })

  it('calls fetch with only the mandatory id field when method is DELETE', async () => {

    const id = '123'
    const method = 'DELETE'

    const expected = {
      url: common.url,
      request: {
        headers: common.headers,
        method
      }
    }

    await service.consume({
      method,
      id
    })

    expect(global.fetch).toHaveBeenCalledWith(`${expected.url}/${id}`, expected.request)
  })
})

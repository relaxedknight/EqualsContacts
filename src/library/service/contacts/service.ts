import { endpoint } from '@library'

import type { Schema } from './type'

export const service = endpoint.build<Schema>({
  protocol: 'https',
  domain: '61c32f169cfb8f0017a3e9f4.mockapi.io',
  path: '/api/v1/contacts',
  headers: {
    'content-type': 'application/json'
  }
})

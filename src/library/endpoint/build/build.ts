import type { Data, Method } from '../type'

import { consume } from '../consume/consume'

export function build<S extends Record<string, unknown>>(resource: {
  protocol: 'http' | 'https'
  domain: `${string}.${string}`
  path: `/api/v${'1'}/${string}`
  headers: HeadersInit
}) {

  const url = `${resource.protocol}://${resource.domain}${resource.path}`

  return {
    consume<M extends Method>(input?: {
      method?: M
    } & Data<M, S>) {

      return consume<S, M>({
        ...input,
        headers: resource.headers,
        url
      })
    },
    headers: resource.headers,
    url
  }
}

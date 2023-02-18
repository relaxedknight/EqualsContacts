import { Data, Method } from '../type'

export function consume<S extends Record<string, unknown>, M extends Method>(request: {
  headers: HeadersInit
  method?: M,
  url: string
} & Data<M, S>) {

  const method = request?.method || 'GET'
  const body = request && 'body' in request ? JSON.stringify(request.body) : undefined

  return fetch(`${request.url}${request && 'id' in request ? `/${request.id}` : ''}`, {
    headers: request.headers,
    method, 
    body 
  })
}

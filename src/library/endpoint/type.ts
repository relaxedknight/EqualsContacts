export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Data<M extends Method, S extends Record<string, unknown>> = (M extends 'GET' ? {} : M extends 'DELETE' | 'PUT' ? {
  id: string
} & (M extends 'PUT' ? {
  body: {
    [K in keyof S]?: S[K]
  }
} : {}) : {
  body: {
    [K in keyof Omit<S, 'id'>]: Omit<S, 'id'>[K]
  } 
})

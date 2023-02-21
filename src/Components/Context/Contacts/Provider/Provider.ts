import { createContext, useContext } from 'react'

import type { Store } from '../type'

const store: Store = {
  all: {
    value: [],
    set() {},
    filtered: []
  },
  edit: {
    value: undefined,
    set: () => {}
  },
  filter: {
    value: '',
    set: () => {}
  },
}

const Context = createContext(store)

export const context = () => useContext(Context)
export const Provider = Context.Provider

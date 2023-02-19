import { FunctionComponent, ReactNode, useState } from 'react'

import { Atom, Organism } from '@Components'
import { guard, service } from '@library'

import * as style from './load.css'
import { Provider } from '../'
import { store } from '../store/store'
import { hook } from '@library'

export const Load: FunctionComponent<{
  children: ReactNode
}> = (prop) => {

  const contacts = store()

  hook.onMount(() => {

    (async() => {

      const resp = await service.contacts.all()

      if (guard.isError(resp)) {

        // handle error
        return
      }

      contacts.all.set(resp.data)
    })()
  })

  return <>
    <Provider value={contacts}>
      <Organism.Splash 
        remove={!!contacts.all.value.length}>
        <Atom.Icon.Logo className={{
          container: style.container
        }} text='Equals Contacts'>
          <Atom.Animation.Bar className={style.bar}>Loading...</Atom.Animation.Bar>
        </Atom.Icon.Logo>
      </Organism.Splash>

      {prop.children}
    </Provider>
  </>
}

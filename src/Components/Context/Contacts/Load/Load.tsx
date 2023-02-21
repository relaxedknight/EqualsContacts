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
  const [error, setError] = useState('')

  hook.onMount(() => {

    (async() => {

      const resp = await service.contacts.all()

      if (guard.isError(resp)) {

        setError(resp.message)

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
          {!error ? 
            <Atom.Animation.Bar className={style.bar}>Loading...</Atom.Animation.Bar> : 
            <Atom.Text.Error>{error}</Atom.Text.Error>
          }
        </Atom.Icon.Logo>
      </Organism.Splash>

      {prop.children}
    </Provider>
  </>
}

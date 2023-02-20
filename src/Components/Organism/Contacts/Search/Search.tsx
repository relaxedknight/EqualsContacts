import type { FunctionComponent } from 'react'

import { Atom, Context } from '@Components'

import * as style from './Search.css'

export const Search: FunctionComponent = () => {

  const contacts = Context.Contacts.context()

  return <Atom.Input.Standard
    className={{
      container: style.container,
      label: style.label,
      input: style.input
    }}
    id='ContactsSearch'
    label='Search Contacts'
    onChange={(value) => contacts.filter.set(value)}
    placeholder='Search Contacts...'
    name='search'
    testId='ContactsSearch'
    type='text' />
}

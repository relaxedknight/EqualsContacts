import Head from 'next/head'

import { Atom, Context, Organism } from '@Components'
import { hook } from '@library'

import { themeClass } from '@style/reset.css'

export default function() {

  hook.onMount(() => {
    document.documentElement.classList.add(themeClass)
  })

  return <>
    <Head>
      <title>Equals Contacts</title>
    </Head>

    <Atom.Heading.Standard type='h1'>
      <Atom.Icon.Logo text='Equals Contacts' />
    </Atom.Heading.Standard>

    <main>
      <Context.Contacts.Load>
        
        <Atom.Board.Standard
          header={<Organism.Contacts.Search />}
          content={<Organism.Contacts.List />} 
          footer={<Organism.Contacts.Form />}
          testId='ContactsBoard'  />
      </Context.Contacts.Load>
    </main>
  </>
}

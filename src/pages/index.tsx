import Head from 'next/head'

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
  </>
}

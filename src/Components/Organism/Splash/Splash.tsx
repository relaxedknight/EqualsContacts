import type { FunctionComponent, ReactNode } from 'react'

import ReactDOM from 'react-dom'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { hook } from '@library'

import * as style from './Splash.css'

export const Splash: FunctionComponent<{
  children: ReactNode
  remove: boolean
}> = (prop) => {

  const [documentNode, setDocumentNode] = useState<null | HTMLElement>(null)
  const [removed, setRemoved] = useState(false)

  hook.onMount(() => {

    setDocumentNode(document.body)
  })

  return documentNode && !removed ? ReactDOM.createPortal(
    <CSSTransition 
      in={!prop.remove} 
      timeout={500} 
      classNames={{
        exit: style.transition.fade.out.start,
        exitActive: style.transition.fade.out.active,
       }} 
      className={style.common}
      onExited={() => setRemoved(true)}>
      <div data-testid='Splash'>
        {prop.children}
      </div>
    </CSSTransition>,
    documentNode
  ) : null
}

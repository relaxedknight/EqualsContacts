import type { FunctionComponent } from 'react'

import { Atom } from '@Components'

import * as style from './Icon.css'
import * as Type from './Icon.type'

export const Icon: FunctionComponent<Type.Prop> = (prop) => {

  const Tag = Atom.Icon[prop.icon]

  return <Atom.Button.Action
    className={style.container}
    onClick={prop.onClick} 
    testId={prop.testId}><Tag alt={prop.alt} /></Atom.Button.Action>
}

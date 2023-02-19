import type { FunctionComponent } from 'react'

import { Atom } from '@Components'
import { className } from '@library'

import * as style from './Error.css'
import * as Type from './Error.type'

export const Error: FunctionComponent<Type.Prop> = (prop) => {

  return <Atom.Text.Standard className={className.format(style.text, prop.className)}>{prop.children}</Atom.Text.Standard>
}

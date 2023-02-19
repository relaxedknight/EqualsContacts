import type { FunctionComponent } from 'react'

import { className } from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = ({
  type: Type = 'p',
  ...prop
}) => {

  return <Type className={className.format(style.text, prop.className)}>{prop.children}</Type>
}

import type { FunctionComponent, ReactNode } from 'react'

import { className } from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  const List = 'ul'

  return <List className={className.format(style.container, prop.className)}>
    {prop.items.map((item, i) => {

      return <li
        className={style.item} 
        key={i}>{item}</li>
    })}
  </List>
}

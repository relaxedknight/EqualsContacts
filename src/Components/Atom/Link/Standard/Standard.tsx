import type { FunctionComponent } from 'react'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  const href = /^\d{3}-\d{3}-\d{4}$/.test(prop.href) ? `tel:${prop.href}` : prop.href

  return <a 
    className={style.text} 
    href={href}
    title={prop.title}>{prop.children}</a>
}

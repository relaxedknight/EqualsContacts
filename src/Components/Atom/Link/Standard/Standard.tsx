import type { FunctionComponent } from 'react'

import { regex } from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  const href = `${regex.email.test(prop.href) ? 
    'mailto:' : regex.phone.test(prop.href) ? 
    'tel:' : ''}${prop.href}`

  return <a 
    className={style.text} 
    href={href}
    title={prop.title}>{prop.children}</a>
}

import type { FunctionComponent, ReactNode } from 'react'
import { cloneElement } from 'react'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  const mutated = cloneElement(prop.content, {
    className: style.content
  })

  return <section 
    className={style.container} 
    data-testid={prop.testId}>
    <header className={style.header}>{prop.header}</header>
    {mutated}
    <footer className={style.footer}>{prop.footer}</footer>
  </section>
}

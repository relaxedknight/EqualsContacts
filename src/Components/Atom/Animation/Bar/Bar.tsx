import type { FunctionComponent, ReactNode } from 'react'

import { className } from '@library'

import * as style from './Bar.css'

export const Bar: FunctionComponent<{
  children: ReactNode
  className?: string
}> = (prop) => {

  return <span className={className.format(style.container, prop.className)}>{prop.children}</span>
}

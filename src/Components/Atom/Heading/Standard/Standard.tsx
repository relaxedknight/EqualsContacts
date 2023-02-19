import type { FunctionComponent, ReactNode } from 'react'

import { className } from '@library'

import * as style from './Standard.css'

export const Standard: FunctionComponent<{
  className?: string
  children?: ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}> = (prop) => {

  const Tag = prop.type

  return <Tag className={className.format(style.heading[prop.type], prop.className)}>{prop.children}</Tag>
}

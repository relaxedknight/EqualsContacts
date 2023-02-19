import { cloneElement, FunctionComponent, ReactNode } from 'react'

import { className } from '@library'

import * as style from './Logo.css'

export const Logo: FunctionComponent<{
  children?: JSX.Element
  className?: {
    container?: string
    text?: string
  }
  text: string
}> = (prop) => {

  const child = prop.children && cloneElement(prop.children, {
    className: className.format(prop.children.props.className, style.child)
  })

  return <div className={className.format(style.container, prop.className?.container)}>
    <span className={className.format(style.text, prop.className?.text)}>{prop.text}</span>
    {child}
  </div>
}

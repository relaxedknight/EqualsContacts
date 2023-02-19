import type { FunctionComponent } from 'react'

import { className } from '@library'

import * as style from './Action.css'
import * as Type from './Action.type'

export const Action: FunctionComponent<Type.Prop> = ({
  type = 'button',
  ...prop
}) => {

  return <button 
    className={className.format(style.container[prop.style || 'standard'], prop.className)}
    data-testid={prop.testId}
    onClick={prop.onClick}
    onMouseDown={prop.onMouseDown}
    type={type}>{prop.children}</button>
}

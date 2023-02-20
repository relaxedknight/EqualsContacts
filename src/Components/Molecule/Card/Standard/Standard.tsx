import type { FunctionComponent } from 'react'
import { useState } from 'react'

import { Atom } from '@Components'
import { className} from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  const [hovering, setHovering] = useState(false)

  return <div className={className.format(style.container)}
    data-testid={prop.testId}>
    <header className={style.header}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>
      {prop.header}

      <div 
        className={hovering ? style.action.show : style.action.hidden}
        data-testid='CardStandardActions'>

        <Atom.Button.Icon 
          alt='View' 
          icon='Eye' 
          onClick={prop.onView} 
          testId='ViewButton' />

        <Atom.Button.Icon 
          alt='Edit' 
          icon='Pen' 
          onClick={prop.onEdit} 
          testId='EditButton' />

        <Atom.Button.Icon 
          alt='Delete' 
          icon='Bin' 
          onClick={prop.onDelete} 
          testId='DeleteButton' />
      </div>
    </header>

    {prop.children && <div className={style.content}>{prop.children}</div>}
  </div>
}

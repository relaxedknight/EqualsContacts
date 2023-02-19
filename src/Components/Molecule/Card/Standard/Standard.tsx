import type { FunctionComponent } from 'react'

import { Atom } from '@Components'
import { className} from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export const Standard: FunctionComponent<Type.Prop> = (prop) => {

  return <div className={className.format(style.container)}>
    <header className={style.header}>
      {prop.header}

      <div className={style.action}>

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

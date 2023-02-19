import type { FunctionComponent } from 'react'
import Image from 'next/image'

import * as style from './Pen.css'
import * as Type from './Pen.type'

export const Pen: FunctionComponent<Type.Prop> = (prop) => {

  return <Image
    alt={prop.alt}
    className={style.image}
    height={100}
    src='/img/icon/pen.svg'
    width={100} />
}

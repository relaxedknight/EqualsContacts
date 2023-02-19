import type { FunctionComponent } from 'react'
import Image from 'next/image'

import * as style from './Eye.css'
import * as Type from './Eye.type'

export const Eye: FunctionComponent<Type.Prop> = (prop) => {

  return <Image
    alt={prop.alt}
    className={style.image}
    height={100}
    src='/img/icon/eye.svg'
    width={100} />
}

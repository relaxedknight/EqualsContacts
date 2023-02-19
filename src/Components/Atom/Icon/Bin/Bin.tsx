import type { FunctionComponent } from 'react'
import Image from 'next/image'

import * as style from './Bin.css'
import * as Type from './Bin.type'

export const Bin: FunctionComponent<Type.Prop> = (prop) => {

  return <Image
    alt={prop.alt}
    className={style.image}
    height={100}
    src='/img/icon/bin.svg'
    width={100} />
}

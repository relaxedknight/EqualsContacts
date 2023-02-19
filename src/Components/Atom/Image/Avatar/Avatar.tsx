import type { FunctionComponent } from 'react'
import Image from 'next/image'

import { className } from '@library'

import * as style from './Avatar.css'
import * as Type from './Avatar.type'

export const Avatar: FunctionComponent<Type.Prop> = (prop) => {

  return <Image
    alt={prop.alt}
    className={className.format(style.image, prop.className)}
    height={120}
    src={prop.src}
    width={120} 
  />
}

import type { ReactNode } from 'react'

export type Prop = {
  className?: string
  children: ReactNode
  type?: 'p' | 'span'
}

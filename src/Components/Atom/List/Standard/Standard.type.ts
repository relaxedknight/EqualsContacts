import type { ReactNode } from 'react'

export type Prop = {
  className?: string
  items: ReactNode[]
  type: 'ul' | 'ol'
}

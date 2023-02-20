import type { ReactNode } from 'react'

export type Prop = {
  className?: string
  items: ReactNode[]
  testId: string
  type: 'ul' | 'ol'
}

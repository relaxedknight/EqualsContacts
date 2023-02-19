import type { ReactNode } from 'react'

export type Prop = {
  children: ReactNode
  className?: string
  onClick?(): void
  onMouseDown?(): void
  style?: 'standard' | 'thick'
  testId: string
  type?: 'button' | 'reset' | 'submit'
}

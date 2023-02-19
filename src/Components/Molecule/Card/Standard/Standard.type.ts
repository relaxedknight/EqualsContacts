import type { ReactNode } from 'react'

export type Prop = {
  children?: ReactNode
  header: ReactNode
  onView: () => void
  onEdit: () => void
  onDelete: () => void
  testId: string
}

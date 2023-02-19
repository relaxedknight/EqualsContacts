import type { Atom } from '@Components'

export type Prop = {
  alt: string
  icon: keyof Omit<typeof Atom.Icon, 'Logo'>
  onClick: () => void
  testId: string
}

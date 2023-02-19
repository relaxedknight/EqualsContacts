import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: `0 ${variable.spacing.xl}`,
  textAlign: 'center',
})

export const bar = style({
  fontSize: 0,
  marginTop: variable.spacing.l
})

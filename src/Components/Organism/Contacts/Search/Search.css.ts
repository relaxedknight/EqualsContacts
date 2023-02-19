import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

export const label = style({
  fontSize: 0
})

export const input = style({
  backgroundColor: 'transparent',
  color: variable.color.primary.foreground,
  border: 0,
  fontSize: 18,
  padding: `${variable.spacing.m} ${variable.spacing.l}`
})

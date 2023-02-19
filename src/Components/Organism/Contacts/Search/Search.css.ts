import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

export const container = style({
  padding: 0
})

export const label = style({
  display: 'none',
})

export const input = style({
  backgroundColor: 'transparent',
  color: variable.color.quarternary.background,
  fontFamily: variable.font.equals.bold,
  border: 0,
  fontSize: 18,
  margin: 0,
  padding: `${variable.spacing.m} ${variable.spacing.l}`
})

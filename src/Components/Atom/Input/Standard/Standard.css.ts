import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `0 ${variable.spacing.m}`
})

export const label = style({
  fontFamily: variable.font.equals.bold,
  margin: `${variable.spacing.l} 0 ${variable.spacing.m}`,
})

export const input = style({
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '2px solid #fff',
  boxSizing: 'border-box',
  color: '#fff',
  fontFamily: variable.font.equals.light,
  marginBottom: variable.spacing.m,
  outline: 'none'
})

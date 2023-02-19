import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const container = style({
  border: 0,
  borderRadius: 4,
  height: 20,
  marginLeft: variable.spacing.m,
  padding: 0,
  width: 20
})

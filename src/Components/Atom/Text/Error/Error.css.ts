import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

export const text = style({
  color: variable.color.error.foreground,
  marginBottom: variable.spacing.m
})

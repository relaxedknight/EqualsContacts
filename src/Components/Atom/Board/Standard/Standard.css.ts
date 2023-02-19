import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

export const container = style({
  backgroundColor: variable.color.tertiary.background,
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxHeight: '100%',
  margin: '0 auto',
  maxWidth: 480,
  overflow: 'hidden',
  width: '100%',
})

export const header = style({
  backgroundColor: variable.color.secondary.background,
  borderRadius: 2,
  color: variable.color.secondary.foreground,
  margin: variable.spacing.m
})

export const content = style({
  backgroundColor: variable.color.tertiary.background,
  borderRadius: 2,
  color: variable.color.primary.foreground,
  flex: 1,
  margin: variable.spacing.m,
  overflow: 'hidden'
})

export const footer = style({
  backgroundColor: variable.color.quarternary.background,
  borderRadius: 2,
  color: variable.color.quarternary.foreground,
  margin: variable.spacing.m
})

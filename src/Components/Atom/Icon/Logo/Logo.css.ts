import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

const pseudo = {
  backgroundColor: variable.color.secondary.background,
  content: '',
  display: 'block',
  height: 16,
  marginBottom: variable.spacing.m,
  width: 56
}

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  ':before': {
    ...pseudo,
    order: 0
  },
  ':after': {
    ...pseudo,
    order: 0
  }
})

export const text = style({
  fontFamily: variable.font.equals.bold,
  order: 1,
  margin: `${variable.spacing.m} ${variable.spacing.l}`
})

export const child = style({
  order: 1
})

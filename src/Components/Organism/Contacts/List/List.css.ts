import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const container = style({
  overflowX: 'hidden',
  overflowY: 'auto'
})

export const name = style({
  fontFamily: variable.font.equals.bold,
  fontSize: variable.font.size.l
})

export const avatar = style({
  borderRadius: 10,
  marginRight: variable.spacing.l,
  height: 60,
  width: 60
})

export const info = {
  container: style({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: variable.spacing.xs,
    textAlign: 'center',
    width: '50%',
  }),
  title: style({
    fontFamily: variable.font.equals.bold,
    margin: `${variable.spacing.m}`
  }),
  value: style({

  })
}

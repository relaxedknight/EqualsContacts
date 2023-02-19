import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const image = style({
  alignItems: 'center',
  display: 'flex',
  fontSize: variable.font.size.s,
  justifyContent: 'center'
})

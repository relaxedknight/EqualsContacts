import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const body = style({})

export const common = style({
  alignItems: 'center',
  backgroundColor: variable.color.primary.background,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  textAlign: 'center',
  top: 0,
  width: '100vw',
  zIndex: 1
})

export const transition = {
  fade: {
    out: {
      start: style({
        opacity: 1,
        transition: 'opacity .25s ease, visibility .25s ease',
        visibility: 'visible'
      }),
      active: style({
        opacity: 0,
        visibility: 'hidden'
      }),
    }
  }
}

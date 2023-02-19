import { keyframes, style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

const size = 8

const slideAndExpand = keyframes({
  '0%': {
    left: 0,
    width: size
  },
  '50%': {
    width: `calc(100% / 4)`
  },
  '100%': {
    left: `calc(100% - ${size}px)`,
    width: size
  }
})

const common = {
  borderRadius: size,
  content: '',
  height: size,
  display: 'block',
}

export const container = style({
  background: variable.color.primary.background,
  position: 'relative',
  width: '100%',
  ':before': {
    ...common,
    animation: `${slideAndExpand} ease-in-out 1.25s infinite alternate`,
    backgroundColor: variable.color.secondary.background,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: size,
  },
  ':after': {
    ...common,
    background: variable.color.primary.foreground,
    height: size
  },
})

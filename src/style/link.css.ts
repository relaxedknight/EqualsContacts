import { globalStyle } from '@vanilla-extract/css'

import { variable } from './theme.css'

globalStyle('a', {
  color: variable.color.secondary.foreground,
  textDecoration: 'none',
  transition: 'color .25s ease'
})

globalStyle('a:hover', {
  color: variable.color.secondary.background
})

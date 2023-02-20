import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

const common = {
  action: {
    opacity: 0,
    paddingRight: `calc(${variable.spacing.xl})`,
    position: 'absolute',
    right: 0,
    transform: 'translate(100%, -50%)',
    transition: 'transform .3s ease, opacity .75s ease, visibility .75s ease',
    top: '50%',
    visibility: 'hidden',
  }
} as const

export const container = style({})

export const header = style({
  alignItems: 'center',
  display: 'flex',
  position: 'relative'
})

export const action = {
  hidden: style(common.action),
  show: style({
    ...common.action,
    opacity: 1,
    transform: 'translate(0%, -50%)',
    visibility: 'visible'
  })
}

export const content = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: `${variable.spacing.xl} 0`
})

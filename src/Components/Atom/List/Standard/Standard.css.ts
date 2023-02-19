import { style } from '@vanilla-extract/css'

import { variable } from '@style/reset.css'

export const container = style({
  listStyle: 'none'
})

export const item = style({
  'selectors': {
    [`${container} > &`]: {
      marginBottom: variable.spacing.m
    },
    [`${container} > &:last-child`]: {
      marginBottom: 0
    }
  }
})

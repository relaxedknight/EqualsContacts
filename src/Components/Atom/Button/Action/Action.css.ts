import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

const common = {
  backgroundColor: variable.color.secondary.background,
  border: 0,
  color: variable.color.secondary.foreground,
  cursor: 'pointer',
  fontFamily: variable.font.equals.bold,
  selectors: {
    ['&[type=reset]']: {
      backgroundColor: variable.color.tertiary.background,
      border: `1px solid ${variable.color.tertiary.foreground}`,
      color: variable.color.tertiary.foreground,
    },
    ['&[type=submit]']: {
      backgroundColor: variable.color.secondary.background,
      color: variable.color.secondary.foreground
    }
  }
}

export const container = {
  standard: style(common),
  thick: style([common, {
    padding: `${variable.spacing.l} ${variable.spacing.s}`,
  }])
}


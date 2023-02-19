import { style } from '@vanilla-extract/css'

import { variable } from '@style/theme.css'

const common = {
  fontFamily: variable.font.equals.bold
}

export const heading = {
  h1: style([common, {
    padding: `${variable.spacing.xxl} ${variable.spacing.l} ${variable.spacing.l}`,
    textAlign: 'center'
  }]),
  h2: style([common]),
  h3: style([common]),
  h4: style([common, {
    fontSize: 14
  }]),
  h5: style([common])
}

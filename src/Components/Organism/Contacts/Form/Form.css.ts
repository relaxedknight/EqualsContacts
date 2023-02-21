import { style } from '@vanilla-extract/css'

const common = {
  button: {
    width: '100%'
  },
  field: {
    boxSizing: 'border-box'
  }
} as const

export const container = style({
  display: 'flex',
  flexWrap: 'wrap'
})

export const error = style({
  textAlign: 'center',
  width: '100%'
})

export const field = {
  half: style([common.field, {
    width: '50%',
  }]),
  full: style([common.field, {
    width: '100%'
  }])
}

export const button = {
  submit: style([common.button, {
    'selectors': {
      [`${container} &:only-of-type`]: {
        marginTop: 0
      }
    }
  }]),
  cancel: style([common.button])
}

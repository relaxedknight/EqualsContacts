import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column'
})

export const label = style({})

export const input = style({
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '2px solid #fff',
  boxSizing: 'border-box',
  color: '#fff',
  outline: 'none'
})

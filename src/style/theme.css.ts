import { createTheme } from '@vanilla-extract/css'

import * as font from './font.css'

export const [themeClass, variable] = createTheme({
  color: {
    primary: {
      foreground: 'rgb(255, 255, 255)',
      background: 'rgb(38, 40, 53)'
    },
    secondary: {
      foreground: 'rgb(255, 255, 255)',
      background: 'rgb(255, 185, 0)'
    },
    tertiary: {
      foreground: 'rgb(255, 185, 0)',
      background: 'rgb(9, 10, 24)'
    },
    quarternary: {
      foreground: 'rgb(255, 255, 255)',
      background: 'rgb(72, 74, 88)'
    },
    error: {
      foreground: 'rgb(255, 0, 0)',
      background: 'rgba(255, 0, 0, 0.75)'
    }
  },
  font: {
    equals: {
      bold: font.EqualsBold,
      light: font.EqualsLight
    },
    size: {
      s: '12px',
      m: '14px',
      l: '16px'
    }
  },
  spacing: {
    xxs: '2px',
    xs: '4px',
    s: '6px',
    m: '10px',
    l: '16px',
    xl: '26px',
    xxl: '32px'
  }
})

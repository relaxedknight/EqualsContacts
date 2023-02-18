import { createTheme } from '@vanilla-extract/css'

import * as font from './font'

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
    loading: {
      foreground: 'rgb(239, 131, 136)',
      background: 'rgba(128, 128, 128, .2)'
    },
    error: {
      foreground: 'rgba(255, 0, 0, 0.75)',
      background: 'rgba(255, 0, 0, 0.75)'
    }
  },
  font: {
    equals: {
      bold: font.EqualsBold,
      light: font.EqualsLight
    }
  },
  spacing: {
    xxs: '2px',
    xs: '4px',
    s: '6px',
    m: '8px',
    l: '10px',
    xl: '12px',
    xxl: '14px'
  }
})

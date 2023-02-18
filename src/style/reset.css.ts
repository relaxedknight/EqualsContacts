import { globalStyle } from '@vanilla-extract/css'

import { variable } from './theme.css'
import './link.css'

globalStyle(`html, body, div, span, object, iframe, h1, h2, h3, 
h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, 
dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var,
b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td, article, 
aside, canvas, details, figcaption, figure, footer, header, 
hgroup, menu, nav, section, summary, time, mark, audio, video`, {
  background: 'transparent',
  border: 0,
  fontSize: '100%',
  margin: 0,
  outline: 0,
  padding: 0,
  verticalAlign: 'transparent'
})

globalStyle('body', {
  color: variable.color.primary.foreground,
  fontFamily: variable.font.equals.light,
  lineHeight: 1
})

globalStyle(`article, aside, details, figcaption, figure, footer,
header, hgroup, menu, nav, section`, {
  display: 'block'
})

globalStyle('nav ul', {
  listStyle: 'none'
})

globalStyle('blockquote, q', {
  quotes: 'none'
})

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: ''
})

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: 'none'
})

globalStyle('a', {
  background: 'transparent',
  fontSize: '100%',
  margin: 0,
  padding: 0, 
  verticalAlign: 'baseline'
})

globalStyle('ins', {
  backgroundColor: '#ff9',
  color: '#000',
  textDecoration: 'none'
})

globalStyle('mark', {
  backgroundColor: '#ff9',
  color: '#000', 
  fontStyle: 'italic',
  fontWeight: 'bold'
})

globalStyle('del', {
  textDecoration: 'line-through'
})

globalStyle('abbr[title], dfn[title]', {
  borderBottom: '1px dotted',
  cursor: 'help'
})

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0
})

globalStyle('hr', {
  border: 0,   
  borderTop: '1px solid #cccccc',
  display: 'block',
  height: '1px',
  margin: '1em 0',
  padding: 0
})

globalStyle('input, select', {
  verticalAlign: 'middle'
})

globalStyle('html, body', {
  height: '100%',
  overflow: 'hidden'
})

globalStyle('#__next', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxHeight: '100%'
})

globalStyle('main', {
  flex: 1,
  overflow: 'hidden',
  padding: `0 ${variable.spacing.xl} calc(${variable.spacing.l} * 6)`
})

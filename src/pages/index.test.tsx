import { render } from '@testing-library/react'

import { themeClass } from '@style/reset.css'

import Index from './index'

describe('pages/index', () => {

  it('applies the theme class to the document', () => {

    render(<Index />)

    expect(document.documentElement.className).toBe(themeClass)
  })
})

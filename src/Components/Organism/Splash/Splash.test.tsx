import { render, waitFor } from '@testing-library/react'

import { Splash } from './Splash'

describe('Components/Organism/Splash', () => {

  it('initially renders the passed children within the Splash', () => {

    const screen = render(<Splash remove={false}>Content</Splash>)
    const splash = screen.getByTestId('Splash')

    expect(splash).toHaveProperty('textContent', 'Content')
  })

  it.only('renders nothing when the removed prop is true', async () => {

    const screen = render(<Splash remove={false}>Content</Splash>)
    screen.rerender(<Splash remove={true}>Content</Splash>)

    await waitFor(() => {

      expect(screen.container.firstChild).toBe(null)
    })
  })
})

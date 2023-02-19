import { render, waitFor } from '@testing-library/react'

import { service } from '@library'

import { Load } from './Load'

describe('Context/Contacts/Load', () => {

  it('renders the splash', () => {

    const screen = render(<Load>Text</Load>)
    
    screen.getByTestId('Splash')
    screen.getByText('Equals Contacts')
    screen.getByText('Loading...')
  })

  describe('onMount', () => {

    describe('contacts service all request', () => {

      it('is called', () => {

        global.fetch = jest.fn()
  
        render(<Load>Text</Load>)
  
        const expected = {
          request: {
            body: undefined,
            headers: service.contacts.service.headers,
            method: 'GET'
          }
        }
  
        expect(global.fetch).toHaveBeenCalledWith(service.contacts.service.url, expected.request)
      })
      
      it('removes the splash', async () => {

        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue([{}])
        })
  
        const screen = render(<Load>Text</Load>)

        await waitFor(() => {

          const splash = screen.queryByTestId('Splash')
          const loading = screen.queryByText('Loading...')

          expect(splash).toBe(null)
          expect(loading).toBe(null)
        })
      })
    })
  })
})

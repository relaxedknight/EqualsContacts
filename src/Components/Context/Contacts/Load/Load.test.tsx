import { act, render, waitFor } from '@testing-library/react'

import { service } from '@library'

import { Load } from './Load'

describe('Context/Contacts/Load', () => {

  it('renders the splash', async () => {

    const screen = render(<Load>Text</Load>)
    
    await waitFor(() => {

      screen.getByTestId('Splash')
      screen.getByText('Equals Contacts')
      screen.getByText('Loading...')
    })
  })

  describe('onMount', () => {

    describe('contacts service all request', () => {

      it('is called', async () => {

        global.fetch = jest.fn()
  
        render(<Load>Text</Load>)
  
        const expected = {
          request: {
            body: undefined,
            headers: service.contacts.service.headers,
            method: 'GET'
          }
        }
  
        await waitFor(() => {

          expect(global.fetch).toHaveBeenCalledWith(service.contacts.service.url, expected.request)
        })
      })

      it("renders an error message when contacts can't be retrieved", async () => {

        global.fetch = jest.fn()
  
        const screen = render(<Load>Text</Load>)

        await waitFor(() => {
          
          const error = screen.queryByText('There was an issue retrieving the contacts')

          expect(error).toBeDefined()
        })
      })
      
      it('removes the splash when contacts are retrieved', async () => {

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

import { fireEvent, render, waitFor} from '@testing-library/react'

import { contacts } from '@fixture'
import { date, phone, service } from '@library'

import { Form } from './Form'
import * as style from './Form.css'

describe('Organism/Contacts/Form', () => {

  it('initially renders the Create button', () => {

    const screen = render(<Form />)
    const button = screen.getByTestId('Contact-Add-UpdateAddCreate')

    screen.debug()

    const expected = {
      form: {
        className: style.container,
        localName: 'form'
      },
      button: {
        className: expect.stringContaining(style.button.submit),
        type: 'button'
      }
    }

    expect(screen.container.children).toHaveLength(1)
    expect(screen.container.firstChild).toEqual(expect.objectContaining(expected.form))
    expect(screen.container.firstChild.firstChild).toBe(button)
    expect(button).toEqual(expect.objectContaining(expected.button))
  })

  describe('when create button is clicked', () => {

    it('renders the fields', async () => {

      const screen = render(<Form />)
      const button = screen.getByTestId('Contact-Add-UpdateAddCreate')
  
      fireEvent.mouseDown(button)
  
      await waitFor(() => {
  
        expect(screen.queryByLabelText('Name')).toBeDefined()
        expect(screen.queryByLabelText('Date of Birth')).toBeDefined()
        expect(screen.queryByLabelText('Avatar')).toBeDefined()
        expect(screen.queryByLabelText('Email')).toBeDefined()
        expect(screen.queryByLabelText('Phone')).toBeDefined()
      })
    })

    it('updates the button text to Add', async () => {

      const screen = render(<Form />)
      const button = screen.getByTestId('Contact-Add-UpdateAddCreate')
  
      fireEvent.mouseDown(button)
  
      await waitFor(() => {
  
        expect(screen.queryByTestId('Contact-Add-UpdateAddCreate').textContent).toBe('Add')
      })
    })
  })

  describe('when all fields are valid', () => {

    it('submits the form', async () => {

      const mock = (() => {
  
        const date = new Date('2023-01-01')
  
        return {
          date,
          spy: jest
          .spyOn(global, 'Date')
          .mockImplementation(() => date)
        }
      })()
  
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(contacts.single)
      })
  
      const value = {
        phone: phone.format(contacts.single.phone)
      }
  
      const screen = render(<Form />)
      const button = screen.getByTestId('Contact-Add-UpdateAddCreate')
  
      fireEvent.mouseDown(button)
  
      const fields = {
        name: {
          input: screen.queryByLabelText('Name'),
          value: contacts.single.name
        },
        birthday: {
          input: screen.getByLabelText('Date of birth'),
          value: date.build({
            date: mock.date
          }).format('{year}-{month}-{day}')
        },
        avatar: {
          input: screen.getByLabelText('Avatar'),
          value: contacts.single.avatar
        },
        email: {
          input: screen.getByLabelText('Email'),
          value: contacts.single.email
        },
        phone: {
          input: screen.getByLabelText('Phone'),
          value: phone.format(contacts.single.phone)
        }
      }
  
      Object.values(fields).forEach((field) => {
  
        fireEvent.change(field.input, { target: {
          value: field.value
        }})
      })
  
      fireEvent.click(button)
  
      await waitFor(() => {
  
        expect(screen.queryByLabelText('Name')).toBe(null)
        expect(screen.queryByLabelText('Date of Birth')).toBe(null)
        expect(screen.queryByLabelText('Avatar')).toBe(null)
        expect(screen.queryByLabelText('Email')).toBe(null)
        expect(screen.queryByLabelText('Phone')).toBe(null)
      })
  
      const expected = {
        url: service.contacts.service.url,
        request: {
          headers: service.contacts.service.headers,
          body: JSON.stringify({
            createdAt: mock.date.toISOString(),
            birthday: mock.date.toISOString(),
            name: contacts.single.name,
            avatar: contacts.single.avatar,
            email: contacts.single.email,
            phone: value.phone
          }),
          method: 'POST',
        }
      }
      
      expect(global.fetch).toHaveBeenCalledWith(expected.url, expected.request)
    })
  })

  describe('when fields are invalid', () => {

    it('renders errors', async () => {
  
      const screen = render(<Form />)
      const button = screen.getByTestId('Contact-Add-UpdateAddCreate')
  
      fireEvent.mouseDown(button)
  
      fireEvent.click(button)
  
      await screen.findByText('Name is required')
      await screen.findByText('A date of birth is required')
      await screen.findByText('An Avatar URL is required')
      await screen.findByText('An email is required')
      await screen.findByText('A phone number is required')
    })
  })
})

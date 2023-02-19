import { act, fireEvent, render } from '@testing-library/react'

import { Atom } from '@Components'

import { Standard } from './Standard'
import * as style from './Standard.css'
import { useForm } from 'react-hook-form'

const common = {
  prop: {
    id: 'id',
    label: 'label',
    name: 'name',
    testId: 'Input',
    type: 'text'
  }
} as const

describe('Component/Atom/Input/Standard', () => {

  describe('container', () => {

    it('renders with the correct attributes', () => {

      const screen = render(<Standard {...common.prop} />)
      const container = screen.getByTestId(common.prop.testId)

      const expected = {
        className: style.container
      }

      expect(container).toEqual(expect.objectContaining(expected))
    })
  })

  describe('label', () => {

    it('renders with the correct attributes', () => {

      const screen = render(<Standard {...common.prop} />)
      const label = screen.getByText('label')

      const expected = {
        className: style.label,
        htmlFor: common.prop.id
      }

      expect(label).toEqual(expect.objectContaining(expected))
    })
  })

  describe('input', () => {

    it('renders with the correct attributes', () => {

      const screen = render(<Standard {...common.prop} />)
      const label = screen.getByLabelText('label')

      const expected = {
        className: style.input,
        id: common.prop.id,
        type: common.prop.type
      }

      expect(label).toEqual(expect.objectContaining(expected))
    })
  })

  describe('when passing the error prop', () => {

    it('renders the error', () => {

      const text = 'Error'
      const expected = (() => {

        const screen = render(<Atom.Text.Error>{text}</Atom.Text.Error>)
        const error = screen.getByText('Error')

        screen.unmount()

        return error
      })()

      const screen = render(<Standard 
        {...common.prop} 
        error={text}
      />)
      const error = screen.getByText(text)

      expect(error).toEqual(expected)
    })
  })

  describe.each`
    type        | value
    ${'date'}   | ${'2023-01-01'}
    ${'email'}  | ${'testing@example.com'}
    ${'text'}   | ${'text'}
    ${'tel'}    | ${'01234567891'}
    ${'url'}    | ${'https://www.testing.com'}
  `('when passing the type prop as $type', ({ type, value }) => {

    it('renders the input with the correct attributes', () => {

      const screen = render(<Standard
        {...common.prop}
        type={type} />)
      const input = screen.getByLabelText('label')

      const expected = {
        className: style.input,
        id: 'id',
        type
      }

      Object.entries(expected).forEach((expected) => {
        expect(input).toHaveProperty(...expected)
      })
    })

    it('emits the onChange event', () => {

      const handler = jest.fn()
      const screen = render(<Standard
        {...common.prop}
        onChange={handler}
        type={type} />)
      const input = screen.getByLabelText('label')

      fireEvent.change(input, {
        target: { value }
      })

      expect(handler).toHaveBeenCalledTimes(1)
    })
  })

  describe('when passing the register prop', () => {

    const fields = ['date', 'email', 'text', 'tel', 'url'] as const
    const text = 'Submit'
    const Form = () => {

      const { formState: {errors}, handleSubmit, register } = useForm({
        defaultValues: {
          date: '',
          email: '',
          text: '',
          tel: '',
          url: ''
        }
      })

      return <form onSubmit={handleSubmit(jest.fn())}>
        {fields.map((field, i) => {

          return <Standard
            {...common.prop}
            error={errors[field]?.message}
            key={i}
            label={field}
            name={field}
            register={register}
            type={field}
            validation={{
              required: `Field ${field} is required`
            }}
          />
        })}

        <button type='submit'>{text}</button>
      </form>
    }

    it.each(fields)('it validates the %s field', async (field) => {

      const screen = render(<Form />)
      const input = screen.getByLabelText(field)
      const submit = screen.getByText(text)

      fireEvent.change(input, {
        target: { value: '2023-01-01' }
      })

      fireEvent.change(input, {
        target: { value: '' }
      })

      act(() => {

        fireEvent.click(submit)
      })

      await screen.findByText(`Field ${field} is required`)
    })
  })
})

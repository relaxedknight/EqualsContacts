import type { FunctionComponent } from 'react'
import { useState } from 'react'

import { Atom, Context } from '@Components'
import { date, guard, hook, service } from '@library'
import { useForm } from 'react-hook-form'

import * as style from './Form.css'

export const Form: FunctionComponent = () => {

  const [open, setOpen] = useState(false)
  const contacts = Context.Contacts.context()

  const {
    formState: { errors: error },
    ...form
  } = useForm({
    defaultValues: {
      name: '',
      birthday: '',
      avatar: '',
      email: '',
      phone: ''
    }
  })

  hook.onUpdate(() => {

      form.reset({
        name: contacts.edit.value?.name || '',
        birthday: contacts.edit.value ? date.build({
          date: contacts.edit.value.birthday
        }).format('{year}-{month}-{day}') : '',
        avatar: contacts.edit.value?.avatar || '',
        email: contacts.edit.value?.email || '',
        phone: contacts.edit.value?.phone || ''
      })

    setOpen(!!contacts.edit.value)
  }, contacts.edit.value)

  return <form 
    className={style.container} 
    onSubmit={form.handleSubmit(async (data) => {

      const resp = contacts.edit.value ? await service.contacts.update({
        id: contacts.edit.value.id,
        ...data
      }) : await service.contacts.create(data)

      if (guard.isError(resp)) {

        // Handle Error

        return
      }

      const updated = contacts.edit.value ? contacts.all.value.map((filtered) => {

        return filtered.id === resp.data.id ? resp.data : filtered
      }) : [
        ...contacts.all.value,
        resp.data
      ]

      contacts.all.set(updated)
      form.reset({})
      setOpen(false)
  })}>

    {open && <>
      <Atom.Input.Standard
        className={{
          container: style.field.half
          }}
        error={error.name?.message}
        id='ContactName'
        label='Name'
        name='name'
        placeholder='Enter name'
        register={form.register}
        testId='ContactName'
        type='text'
        validation={{
          required: 'Name is required'
        }} />

        <Atom.Input.Standard
          className={{
            container: style.field.half
          }}
          error={error.birthday?.message}
          id='ContactBirthday'
          label='Date of birth'
          name='birthday'
          register={form.register}
          testId='ContactBirthday'
          type='date'
          validation={{
            required: 'A date of birth is required',
            validate(value) {
              const date = new Date(value)
              const now = new Date()

              date.setDate(date.getDate() + 1)
              
              return date > now ? 'Date of birth must be in the past' : true
            }
          }} />

        <Atom.Input.Standard
          className={{
            container: style.field.full
          }}
          error={error.avatar?.message}
          id='ContactAvatar'
          label='Avatar'
          name='avatar'
          placeholder='Enter Avatar URL'
          register={form.register}
          testId='ContactAvatar'
          type='url'
          validation={{
            required: 'An Avatar URL is required',
            pattern: {
              value: /^https?:\/\/.*.jpg$/,
              message: 'Must be a .jpg image'
            }
          }} />

        <Atom.Input.Standard
          className={{
            container: style.field.half
          }}
          error={error.email?.message}
          id='ContactEmail'
          label='Email'
          name='email'
          placeholder='Enter email address'
          register={form.register}
          testId='ContactEmail'
          type='email'
          validation={{
            required: 'An email is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Not a valid email'
            }
          }} />

        <Atom.Input.Standard
          className={{
            container: style.field.half
          }}
          error={error.phone?.message}
          id='ContactPhone'
          label='Phone'
          name='phone'
          placeholder='Enter phone number'
          register={form.register}
          testId='ContactPhone'
          type='tel'
          validation={{
            required: 'A phone number is required',
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: 'Phone number must be in the correct format'
            }
          }} />
        
        </>}

        <Atom.Button.Action
          className={style.button.submit}
          style={'thick'}
          onMouseDown={() => setOpen(true)}
          testId='Contact-Add-UpdateAddCreate'
          type={open ? 'submit' : 'button'}>
            {open ? contacts.edit.value ? 'Update' : 'Add' : 'Create'}
        </Atom.Button.Action>

        {open && <Atom.Button.Action
          className={style.button.cancel}
          onMouseDown={() => {

            contacts.edit.set()
            form.reset({})
            // setRequestError(0)
            setOpen(false)
          }}
          style={'thick'}
          testId='Contact-Add-Cancel'
          type='reset'>Cancel</Atom.Button.Action>}
  </form>
}

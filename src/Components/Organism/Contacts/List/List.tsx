import type { FunctionComponent } from 'react'
import { useState} from 'react'

import type { ServiceType } from '@library'
import { Atom, Context, Molecule } from '@Components'
import { className, date, guard, phone, service } from '@library'

import * as style from './List.css'
import * as Type from './List.type'

export const List: FunctionComponent<Type.Prop> = (prop) => {

  const { all, edit } = Context.Contacts.context()
  const [open, setOpen] = useState<false | ServiceType.ContactsType.Schema['id']>(false)

  const items = all.filter().map((contact, i) => {

    contact.phone = phone.format(contact.phone)

    return <Molecule.Card.Standard
      header={<>
        <Atom.Image.Avatar
          alt={contact.name}
          className={style.avatar}
          src={contact.avatar} />

        <Atom.Text.Standard
          className={style.name}>{contact.name}</Atom.Text.Standard>
      </>}
      onView={() => setOpen(contact.id !== open && contact.id)}
      onEdit={() => edit.set(contact)}
      onDelete={async () => {

        const resp = await service.contacts.destroy(contact)

        if (guard.isError(resp)) {
          
          // Handle Error
          return
        }

        const contacts = all.value.filter((contact) => contact.id !== resp.data.id)
        
        all.set(contacts)
      }}
      testId={`Contact${i}`}>
        {open === contact.id && <>
          <Atom.Text.Standard className={style.info.container}>
            <Atom.Text.Standard 
              className={style.info.title} 
              type='span'>Email</Atom.Text.Standard>
            <Atom.Link.Standard
              href={contact.email}
              title={`Email ${contact.name}`}>{contact.email}</Atom.Link.Standard>
          </Atom.Text.Standard>

          <Atom.Text.Standard className={style.info.container}>
            <Atom.Text.Standard
              className={style.info.title}
              type='span'>Phone</Atom.Text.Standard>
            <Atom.Link.Standard
              href={contact.phone}
              title={`Phone ${contact.phone}`}>{contact.phone}</Atom.Link.Standard>
          </Atom.Text.Standard>

          <Atom.Text.Standard className={style.info.container}>
            <Atom.Text.Standard
              className={style.info.title} 
              type='span'>Birthday</Atom.Text.Standard>
            <Atom.Text.Standard type='span'>{date.build({
              date: contact.birthday
            }).format('{day}/{month}/{year}')}</Atom.Text.Standard>
          </Atom.Text.Standard>

          <Atom.Text.Standard className={style.info.container}>
            <Atom.Text.Standard
              className={style.info.title}
              type='span'>Created at</Atom.Text.Standard>
            <Atom.Text.Standard type='span'>{date.build({
              date: contact.createdAt
            }).format('{day}/{month}/{year} {hour}:{minute}')}</Atom.Text.Standard>
          </Atom.Text.Standard>
        </>}
      </Molecule.Card.Standard>
  })

  return <Atom.List.Standard
    className={className.format(style.container, prop.className)}
    items={items}
    testId={'ContactsList'}
    type='ol' />
}

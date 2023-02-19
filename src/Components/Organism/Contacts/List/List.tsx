import type { FunctionComponent } from 'react'

import { Atom, Context, Molecule } from '@Components'
import { className, date, guard, service } from '@library'

import * as style from './List.css'
import * as Type from './List.type'

export const List: FunctionComponent<Type.Prop> = (prop) => {

  const { active, all, edit } = Context.Contacts.context()

  const items = all.filter().map((contact) => {

    return <Molecule.Card.Standard
      header={<>
        <Atom.Image.Avatar
          alt={contact.name}
          className={style.avatar}
          src={contact.avatar} />

        <Atom.Text.Standard
          className={style.name}>{contact.name}</Atom.Text.Standard>
      </>}
      onView={() => active.set(contact.id === active.value ? undefined : contact.id)}
      onEdit={() => edit.set(contact)}
      onDelete={async () => {

        const resp = await service.contacts.destroy(contact)

        if (guard.isError(resp)) {
          
          // Handle Error
          return
        }

        const contacts = all.value.filter((contact) => contact.id !== resp.data.id)
        
        all.set(contacts)
      }}>
        {active.value === contact.id && <>
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
    type='ol' />
}

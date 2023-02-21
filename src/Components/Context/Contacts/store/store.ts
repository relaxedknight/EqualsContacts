import { useMemo, useState } from 'react'

import { date, phone } from '@library'

import type { Store } from '../type'

export function store(): Store {

  const [allGetter, allSetter] = useState<Store['all']['value']>([])
  const [editGetter, editSetter] = useState<Store['edit']['value']>(undefined)
  const [filterGetter, filterSetter] = useState<Store['filter']['value']>('')

  return {
    all: {
      value: allGetter,
      set: (value) => {
  
        if (Array.isArray(value)) {
  
          allSetter(value)
  
          return
        }
  
        allSetter([
          ...allGetter,
          value
        ])
      },
      filtered: useMemo(() => {

        const regex = new RegExp(filterGetter, 'i')
  
        return allGetter.filter((contact) => {
  
          const test = {
            ...contact,
            birthday: date.build({
              date: contact.birthday
            })?.format('{day}/{month}/{year}'),
            createdAt: date.build({
              date: contact.createdAt
            })?.format('{day}/{month}/{year} {hour}:{minute}'),
            phone: phone.format(contact.phone)
          }
  
          return Object.values(test).find((value) => {
  
            return value && regex.test(value)
          })
        })
      }, [allGetter, filterGetter])
    },
    edit: {
      value: editGetter,
      set: editSetter
    },
    filter: {
      value: filterGetter,
      set: filterSetter,
    }
  }
}

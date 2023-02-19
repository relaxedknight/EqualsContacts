import { useState } from 'react'

import { date } from '@library'

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
      filter: () => {
  
        const regex = new RegExp(filterGetter, 'i')
        const format = {
          date: '{day}/{month}/{year} {hour}:{minute}'
        }
  
        return allGetter.filter((contact) => {
  
          const test = {
            ...contact,
            birthday: date.build({
              date: contact.birthday
            })?.format(format.date),
            createdAt: date.build({
              date: contact.createdAt
            })?.format(format.date)
          }
  
          return Object.values(test).find((value) => {
  
            return value && regex.test(value)
          })
        })
      }
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

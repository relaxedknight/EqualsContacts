import type { ServiceType } from '@library'

export type Store = {
  active: {
    value?: ServiceType.ContactsType.Schema['id']
    set(value?: ServiceType.ContactsType.Schema['id']): void
  }
  all: {
    value: ServiceType.ContactsType.Schema[],
    set(value: ServiceType.ContactsType.Schema[] | ServiceType.ContactsType.Schema): void
    filter(): ServiceType.ContactsType.Schema[]
  }
  edit: {
    value?: ServiceType.ContactsType.Schema
    set(value?: ServiceType.ContactsType.Schema): void
  }
  filter: {
    value: string
    set(value: string): void
  }
}

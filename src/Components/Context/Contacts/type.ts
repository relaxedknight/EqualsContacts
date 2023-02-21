import type { ServiceType } from '@library'

export type Store = {
  all: {
    value: ServiceType.ContactsType.Schema[],
    set(value: ServiceType.ContactsType.Schema[] | ServiceType.ContactsType.Schema): void
    filtered: ServiceType.ContactsType.Schema[]
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

import { error } from '@library'

import type { Schema } from './type'
import { service } from './service'

export async function update(contact: Pick<Schema, 'id'> & {
  [K in keyof Omit<Schema, 'id'>]?: Omit<Schema, 'id'>[K]
}): Promise<{
  ok: boolean
} & ({
  data: Schema
} | {
  message: string
})> {

  try {
    const resp = await service.consume({
      method: 'PUT',
      id: contact.id,
      body: contact
    })
    const json = await resp.json()

    return {
      ok: true,
      data: json
    }

  } catch (e) {

    return error.handle(e)
  }
}

import { error } from '@library'

import type { Schema } from '../type'
import { service } from '../service/service'

export async function create({
  birthday,
  ...contact
}: Omit<Schema, 'id' | 'createdAt'>): Promise<{
  ok: boolean
} & ({
  data: Schema
} | {
  message: string
})> {

  try {
    const body = {
      createdAt: new Date().toISOString(),
      birthday: new Date(birthday).toISOString(),
      ...contact
    }
    const resp = await service.consume({
      method: 'POST',
      body
    })

    return {
      ok: true,
      data: await resp.json()
    }

  } catch (_) {

    return error.handle('There was an issue creating the contact')
  }
}

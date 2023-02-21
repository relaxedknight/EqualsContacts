import { error } from '@library'

import type { Schema } from '../type'
import { service } from '../service/service'

export async function destroy(contact: Schema) {
  
  try {

    const resp = await service.consume({
      method: 'DELETE',
      id: contact.id
    })

    return {
      ok: true,
      data: await resp.json()
    }

  } catch (_) {

    return error.handle('There was an issue deleting the contact')
  }
}

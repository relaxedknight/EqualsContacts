import { error } from '@library'

import type { Schema } from './type'
import { service } from './service'

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

  } catch (e) {

    return error.handle(e)
  }
}

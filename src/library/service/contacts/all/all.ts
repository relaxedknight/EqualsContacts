import { error } from '@library'

import type { Schema } from '../type'
import { service } from '../service/service'

export async function all(): Promise<{
  ok: boolean
} & ({
  data: Schema[]
} | ReturnType<typeof error.handle>)>{

  try {
    const resp = await service.consume()
    const json = await resp.json()

    return {
      ok: true,
      data: json
    }

  } catch (_) {

    return error.handle('There was an issue retrieving the contacts')
  }
}

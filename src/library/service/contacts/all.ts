import { error } from '@library'

import type { Schema } from './type'
import { service } from './service'

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

  } catch (e) {

    return error.handle(e)
  }
}

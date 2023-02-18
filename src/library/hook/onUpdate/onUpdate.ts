import { useEffect } from 'react'

export function onUpdate(callback: () => void | (() => void), on: unknown | unknown[]) {

  useEffect(() => {

    callback()
  }, Array.isArray(on) ? 
    [...on] : [on]
  )
}

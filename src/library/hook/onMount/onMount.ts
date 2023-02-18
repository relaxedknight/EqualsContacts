import { useEffect } from 'react'

export function onMount(callback: () => void | Promise<void>) {

  useEffect(() => {

    callback()
  }, [])
}

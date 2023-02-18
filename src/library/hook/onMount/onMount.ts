import { useEffect } from 'react'

export function onMount(callback: () => void | (() => void)) {

  useEffect(() => {

    callback()
  }, [])
}

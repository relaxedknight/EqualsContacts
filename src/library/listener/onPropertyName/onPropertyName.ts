export function onPropertyName(info: {
  name: string
  callback: () => void
}) {

  return (e: Pick<TransitionEvent, 'propertyName'>) => {

    if (info.name === e.propertyName) {
      info.callback()
    }
  }
}

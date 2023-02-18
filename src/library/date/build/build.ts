export function build(input: {
  date: string | Date
}) {

  const date = input.date instanceof Date ? input.date : new Date(input.date)

  if (!date.toJSON()) {

    return
  }

  const part = {
    day: `0${date.getDate()}`.slice(-2),
    month: `0${date.getMonth() + 1}`.slice(-2),
    year: `${date.getFullYear()}`,
    hour: `0${date.getHours()}`.slice(-2),
    minute: `0${date.getMinutes()}`.slice(-2)
  }

  return {
    ...part,
    format: (format: string) => {

      return Object.entries(part).reduce((formatted, [name, value]) => {

        return formatted.replace(`{${name}}`, value)
      }, format)
    }
  }
}

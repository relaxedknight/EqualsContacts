export function format(input: string) {

  return input.replace(/\s.*/, '').replace(/\./g, '-')
}

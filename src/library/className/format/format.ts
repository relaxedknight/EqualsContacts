export function format(...args: (string | undefined)[]) {

  return args.filter((className) => !!className).join(' ')
}

import { error } from '@library'

export function isError(input: unknown): input is ReturnType<typeof error.handle> {
    
  return typeof input === 'object' && 
    'ok' in input && input.ok === false && 
    'message' in input && Object.keys(input).length == 2
}

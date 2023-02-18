export function handle(error: unknown) {

  // Improvement: Send error info to logging platform for review > fix > release

  const message = (error instanceof Error ? error.message : 
    (error instanceof String || typeof error === 'string') ? 
    error.toString() : '') || 'An unknown problem occurred'

  return {
    ok: false,
    message
  }
}

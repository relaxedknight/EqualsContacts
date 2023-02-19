import type { Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

export type Prop<F extends Record<string, unknown>> = {
  className?: {
    container?: string
    label?: string
    input?: string
  }
  error?: string
  id: string
  label: string
  name: Path<F>
  onChange?: (value: string) => void
  placeholder?: string
  register?: UseFormRegister<F>
  required?: true
  validation?: Pick<RegisterOptions<F>, 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'validate'>
  testId: string
  type: 'date' | 'email' | 'text' | 'tel' | 'url'
}

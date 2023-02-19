import { Atom } from '@Components'
import { className } from '@library'

import * as style from './Standard.css'
import * as Type from './Standard.type'

export function Standard<F extends Record<string, unknown>>(prop: Type.Prop<F>) {

  const registration = prop.register?.(prop.name, prop.validation)
  
  return <div 
    className={className.format(style.container, prop.className?.container)} 
    data-testid={prop.testId}>

    <label 
      className={className.format(style.label, prop.className?.label)}
      htmlFor={prop.id}>{prop.label}</label>

    <input 
      className={className.format(style.input, prop.className?.input)}
      id={prop.id}
      placeholder={prop.placeholder}
      required={prop.required}
      type={prop.type}
      {...registration}
      onChange={(e) => {

        prop.onChange?.(e.currentTarget.value)
        registration?.onChange(e)
      }} />

    {prop.error && <Atom.Text.Error>{prop.error}</Atom.Text.Error>}
  </div>
}

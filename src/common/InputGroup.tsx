import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { clsnm } from './utils/clsnm'

type AsType = 'input' | 'textarea'

type InputType<T> = T extends 'textarea'
  ? HTMLTextAreaElement
  : T extends 'input'
  ? HTMLInputElement
  : never

type InputAttributes<T> = T extends 'textarea'
  ? TextareaHTMLAttributes<HTMLTextAreaElement>
  : T extends 'input'
  ? InputHTMLAttributes<HTMLInputElement>
  : never

type InputGroupProps<T> = InputAttributes<T> & {
  label?: string
  errorMessage?: string
  customInput?: React.ReactNode
  as?: AsType
}
// : never;

const InputGroup = React.forwardRef(function <T extends AsType>(
  {
    className,
    customInput,
    label,
    errorMessage,
    as = 'input',
    ...props
  }: InputGroupProps<T>,
  ref: React.LegacyRef<InputType<T>>
) {
  const MainInput = customInput as any
  const Main = as as any

  return (
    <label className="flex w-full flex-col">
      {label && (
        <span className="block text-sm text-gray-700 dark:text-gray-300">
          {label}
        </span>
      )}
      <div className="mt-1">
        {MainInput && <MainInput {...props} />}
        {!MainInput && (
          <Main
            ref={ref}
            {...props}
            className={clsnm(
              'block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:text-white',
              errorMessage ? 'border-red-500' : 'border-gray-300',
              'placeholder-gray-400',
              'dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-500',
              className
            )}
          />
        )}
        {errorMessage && (
          <div className="mt-1 text-sm text-red-500">{errorMessage}</div>
        )}
      </div>
    </label>
  )
})

InputGroup.displayName = 'InputGroup'
export default InputGroup

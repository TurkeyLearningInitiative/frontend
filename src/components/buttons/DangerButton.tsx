import { FunctionComponent } from 'react'

const DangerButton: FunctionComponent<React.HTMLProps<HTMLButtonElement>> = (
  props
) => {
  const { disabled, ...rest } = props

  return disabled ? (
    <button
      {...rest}
      type="button"
      className="text-white bg-gray-400  cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
      disabled
    />
  ) : (
    <button
      {...rest}
      type="button"
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
    />
  )
}
export default DangerButton

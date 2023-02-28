import { FunctionComponent } from 'react'

const PrimaryButton: FunctionComponent<React.HTMLProps<HTMLButtonElement>> = (
  props
) => {
  const { disabled, ...rest } = props
  return disabled ? (
    <button
      {...rest}
      type="button"
      className="text-white bg-blue-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      disabled
    />
  ) : (
    <button
      {...rest}
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2"
    />
  )
}
export default PrimaryButton

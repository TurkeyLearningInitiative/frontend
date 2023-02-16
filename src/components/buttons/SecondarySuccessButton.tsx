import { FunctionComponent } from 'react'

const SecondarySuccessButton: FunctionComponent<
  React.HTMLProps<HTMLButtonElement>
> = (props) => {
  const { children, ...rest } = props
  return (
    <button
      type={'button' as any}
      {...rest}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 "
    >
      <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  )
}
export default SecondarySuccessButton

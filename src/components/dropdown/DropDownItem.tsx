import * as React from 'react'

export interface IProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string
  onClick?: () => void
  danger?: boolean
  icon?: React.ReactNode
}

export const DropDownItem: React.FunctionComponent<IProps> = (props) => {
  const { danger, icon, onClick, text, ...rest } = props
  return props.danger ? (
    <button
      onClick={props.onClick}
      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
      role="menuitem"
    >
      {props.icon}
      {props.text}
    </button>
  ) : (
    <a
      {...rest}
      className="flex w-full  rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      role="menuitem"
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </a>
  )
}

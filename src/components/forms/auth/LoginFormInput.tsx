import { motion } from 'framer-motion'
import type { HTMLInputTypeAttribute } from 'react'

import { clsnm } from '../../../common/utils/clsnm'

export const LoginFormInput = (props: {
  inputType: any
  delay: number
  label: string
  type: HTMLInputTypeAttribute
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: props.delay,
      }}
    >
      <label
        htmlFor={`loginForm-${props.inputType}`}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          type={props.type}
          id={`loginForm-${props.inputType}`}
          className={clsnm(
            'block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',

            'placeholder-gray-400',
            'dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-500'
          )}
        />
        <div className="pt-1 text-sm text-red-500"></div>
      </div>
    </motion.div>
  )
}

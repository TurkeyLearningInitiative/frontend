import { FunctionComponent, PropsWithChildren, useState } from 'react'
import BaseFooter from '../base/BaseFooter'
import BaseHeader from '../base/BaseHeader'

interface IProps extends PropsWithChildren {}
const BaseLayout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <>
      <div>
        <BaseHeader />
        <main className="bg-secondary-100">{children}</main>
        <BaseFooter />
      </div>
    </>
  )
}
export default BaseLayout

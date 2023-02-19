import { FunctionComponent, PropsWithChildren, useState } from 'react'
import BaseFooter from '@/components/base/BaseFooter'
import BaseHeader from '@/components/base/BaseHeader'

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

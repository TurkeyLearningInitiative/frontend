import { FunctionComponent, PropsWithChildren, useState } from 'react'
import BaseFooter from '@/components/BrandFooter'
import BaseHeader from '@/components/BrandHeader'

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

// import { Dialog, Menu, Transition } from '@headlessui/react'
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import {
//   Bars3BottomLeftIcon,
//   BellIcon,
//   BookmarkSquareIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
import { FunctionComponent, PropsWithChildren, useState } from 'react'
import Footer from '../../components/Footer'
import BaseHeader from '../Base/BaseHeader'

interface IProps extends PropsWithChildren {}
const BaseLayout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <>
      <div>
        <BaseHeader></BaseHeader>
          <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
            <main>{children} </main>
            <Footer />
          </div>
        </div>
    </>
  )
}
export default BaseLayout

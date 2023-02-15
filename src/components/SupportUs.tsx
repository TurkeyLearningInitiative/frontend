import { socialLinks } from '@/common/constants'
import Image from 'next/image'
import React from 'react'
import DiscordButton from './DiscordButton'

type Props = {}

function SupportUs({}: Props) {
  return (
    <>
      <div className="px-6 py-24 bg-white sm:py-32 lg:px-8" id="destek-ol">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Elindeki bilgiyi paylaş
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Destek ol
          </h2>

          <div className="flex flex-col items-center mt-6 text-lg leading-8 text-gray-600">
            Şu anda depoladığımız notları bu repoda biriktiriyoruz. Platform
            hazır olana kadar elindeki notları hangi formatta olursa olsun
            buraya ekleyebilirsin.
            <br />
            <div className="flex self-center justify-center">
              <a
                href="https://github.com/ayyucedemirbas/TurkeyLearningInitiative"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="my-5 transition-all duration-200 ease-in-out border-indigo-600 border-dashed rounded-lg hover:scale-125 hover:border-2 hover:translate-y-3"
                  src="/TurkeyLearningInitiative.svg"
                  width="442"
                  height="193"
                  alt="Turkey Learning Initiative"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <DiscordButton />
              <a
                href="https://github.com/ayyucedemirbas/TurkeyLearningInitiative"
                className="text-base font-semibold leading-7 text-gray-900 hover:bg-slate-50 px-3.5 py-1.5"
              >
                Repoyu incele <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="w-full h-1 mb-2 bg-slate-100 mt-7"></div>
            Projemizin gelişmesi, kaynakları organize edebilmek için desteğe
            ihtiyacımız olabilir. Sen de bu projenin bir parçası olup takip
            etmek istersen{' '}
            <a
              href={socialLinks.discord}
              className="font-semibold text-indigo-600 whitespace-nowrap"
            >
              Discord sunucumuza
            </a>
            katılabilirsin.
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportUs

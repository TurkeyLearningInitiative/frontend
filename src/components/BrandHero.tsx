import Link from 'next/link'
import { SocialIcons } from './SocialIcons'
import { BsArrowUpRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section>
      <div className="container px-2 mx-auto lg:flex items-center justify-between">
        <div className="hero-content lg:w-1/2 mb-12 lg:mb-0">
          <div className="mb-10 sm:flex pt-16 lg:pt-0">
            <div className="rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Gönüllü olarak çalışan bir ekibiz {'  '}
              <a
                href="#"
                className="whitespace-nowrap font-semibold text-success-600"
              >
                <span className=" inset-0" aria-hidden="true" />
                Sen de bize katıl <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Notlarını paylaş, <br />
            öğren ve geliş.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ülkemizde yaşanan felaketlerden sonra eğitim hayatının sekteye
            uğrayacağı bölgelerdeki vatandaşlarımızın her an eğitim içeriklerine
            kolayca ulaşmasını hedefliyoruz. Sen de bizlere yardımcı
            olabilirsin.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#"
              className="base-btn base-btn-lg base-btn-success text-center flex items-center"
            >
              Notları incele
              <BsArrowUpRight className="ml-2" />
            </Link>
            <SocialIcons />
          </div>
        </div>
        <div className="hero-media lg:w-1/2 relative">
          <svg
            className="absolute fill-secondary-100 left-0 hidden h-full w-40 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <img
            className="w-full aspect-square object-cover lg:pl-1 lg:pb-1"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt="TurkeyLearningInitiative"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero

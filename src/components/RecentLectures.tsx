// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { LectureCard } from './LecrtureCard'

export function RecentLectures() {
  return (
    <section className="container mx-auto py-16 px-2">
      <div>
        <h2 className="text-secondary-900 text-2xl font-semibold mb-6">
          Son Eklenenler
        </h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            '@1.25': {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
          <SwiperSlide>
            <LectureCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

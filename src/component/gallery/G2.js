import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './g2.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Img1 from '../../assets/gimg/g1.jpg'
import Img2 from '../../assets/gimg/g2.jpg'
import Img3 from '../../assets/gimg/g3.jpg'
import Img4 from '../../assets/gimg/g4.jpg'
import Img5 from '../../assets/gimg/g5.jpg'
import Img6 from '../../assets/gimg/g6.jpg'
import Img7 from '../../assets/gimg/g7.jpg'
import Img8 from '../../assets/gimg/g8.jpg'
import Img9 from '../../assets/gimg/g9.jpg'
import Img10 from '../../assets/gimg/g10.jpg'
import Img11 from '../../assets/gimg/g11.jpg'
import Img12 from '../../assets/gimg/g12.jpg'
import Img13 from '../../assets/gimg/g13.jpg'
import Img14 from '../../assets/gimg/g14.jpg'
import Img15 from '../../assets/gimg/g15.jpg'
import Img16 from '../../assets/gimg/g16.jpg'
import Img17 from '../../assets/gimg/g17.jpg'
import Img18 from '../../assets/gimg/g18.jpg'
import Img19 from '../../assets/gimg/g19.jpg'
import Img20 from '../../assets/gimg/g20.jpg'
import Img21 from '../../assets/gimg/g21.jpg'

const G2 = () => {
  return (<>
   <div className="heading">
  <h1>Gallery</h1>
  </div>
  <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'3'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1.5,
    }}
    pagination={{ el: '.swiper-pagination', clickable: true }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    }}
    modules={[EffectCoverflow, Pagination, Navigation]}
    className="swiper_container"
  >
    <SwiperSlide>
      <img src={Img1} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img2} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img3} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img4} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img5} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img6} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img7} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img8} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img9} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img10} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img11} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img12} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img13} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img14} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img15} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img16} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img17} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img18} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img19} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img20} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Img21} alt="slide_image" />
    </SwiperSlide>

    <div className="slider-controler">
      <div className="swiper-button-prev slider-arrow">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="swiper-button-next slider-arrow" style={{color :'black'}}>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </Swiper>
</>
  )
}

export default G2
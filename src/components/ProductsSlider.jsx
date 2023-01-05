import React from 'react'
import products from '../data.json'
import CardItem from './CardItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ProductsSlider = () => {

  
  return (
    <div className='slider-wrapper'>
      <Swiper className='slider'
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map(product => (
        <SwiperSlide key={product.id} className='slider-slide'>
          <CardItem product={product} />
        </SwiperSlide>

      ))}
    </Swiper>
        {/* {products.map(product => (
          <CardItem product={product} key={product.id} />
        ))} */}
    </div>
  )
}

export default ProductsSlider
import React from 'react'
import products from '../data.json'
import CardItem from './CardItem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ProductsSlider = () => {
  return (
    <div className='slider-wrapper'>
      <Splide
        aria-label='My Favorite Images'
        options={{
          rewind: true,
          width: '100%',
          gap: '-5rem',
          arrows: false,
          perPage: 6,
          breakpoints: {
            1780:{
              perPage: 5
            },
            1500: {
              perPage: 4,
            },
            995: {
              perPage: 3,
            },
            585: {
              perPage: 2,
            },
            465:{
              perPage: 1,
              arrows: true,
            }
          },
        }}
        className='slider'
      >
        {products.map((product) => (
          <SplideSlide key={product.id} className='slider-slide'>
            <CardItem product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default ProductsSlider

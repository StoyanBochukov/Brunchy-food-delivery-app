import React from 'react'
import products from '../data.json'
import CardItem from './CardItem'

const ProductsSlider = () => {

  
  return (
    <div className='slider-wrapper'>
        {products.map(product => (
          <CardItem product={product} key={product.id} />
        ))}
    </div>
  )
}

export default ProductsSlider
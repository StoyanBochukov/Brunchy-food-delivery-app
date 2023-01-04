import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
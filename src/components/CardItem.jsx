import React from 'react'
import {BsBasket} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../redux/cart/cartSlice'

const CardItem = ({ product }) => {

  const { id, title, desc, price, image } = product
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addIntemToCart({
      id,
      title,
      price
    }))
    dispatch(cartSliceActions.cartTotalAmout())
  }

  return (
    <div className='card'>
        <div className="card-img">
            <img src={image} alt="" />
        </div>
        <div className="card-content">
            <h1 className="item-title">{title}</h1>
            <p className="item-desc">{desc}</p>
            <p className="item-price"><span>$</span> {price.toFixed(2)}</p>
        </div>
        <div className="basket" onClick={addToCartHandler}>
            <BsBasket />
        </div>
    </div>
  )
}

export default CardItem
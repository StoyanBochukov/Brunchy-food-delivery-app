import React from 'react'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../redux/cart/cartSlice'

const CartItem = ({ item }) => {

  const { title, quantity, total, price, id } = item
  const dispatch = useDispatch()


const increaseQuantityHandler = () => {
  dispatch(cartSliceActions.addIntemToCart({
    id,
    title,
    price,
    quantity
  }))
  dispatch(cartSliceActions.cartTotalAmout())
}
const decreaseQuantityHandler = () => {
  dispatch(cartSliceActions.removeItemFromCart(id))
  dispatch(cartSliceActions.cartTotalAmout())
}

  return (
    <li className='item'>
    <div className='item-header'>
      <h3>{title}</h3>
      <div className='price'>
      ${total.toFixed(2)}{' '}
        <span className='itemprice'>(${price.toFixed(2)}/item)</span>
      </div>
    </div>
    <div className='details'>
      <div className='quantity'>
        x <span>{quantity}</span>
      </div>
      <div className='actions'>
        <button onClick={decreaseQuantityHandler} >-</button>
        <button onClick={increaseQuantityHandler} >+</button>
      </div>
    </div>
  </li>
  )
}

export default CartItem
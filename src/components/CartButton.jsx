import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsBasket } from 'react-icons/bs'
import CartItem from './CartItem'
import { uiSliceActions } from '../redux/ui/uiSlice'

const CartButton = () => {

  const dispatch = useDispatch()

  const open = true
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const toggleCartHandler = () => {
    console.log('Click')
    dispatch(uiSliceActions.toggle)
  }

  return (
    <>
      {showCart && (
        <div className='cart-wrapper'>
          <h2>Your Order</h2>
          <ul className='cart-list'>
            <CartItem />
            <CartItem />
          </ul>
        </div>
      )}
      <div className='button-wrapper'>
        <div className='cart-button'>
          <div className='basket-btn' onClick={toggleCartHandler} >
            <BsBasket />
          </div>
          <span>0.00$</span>
          <button className='order-btn'>Order Now</button>
        </div>
      </div>
    </>
  )
}

export default CartButton

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsBasket } from 'react-icons/bs'
import CartItem from './CartItem'
import { uiSliceActions } from '../redux/ui/uiSlice'
import { cartSliceActions } from '../redux/cart/cartSlice'
import { toast } from 'react-toastify'

const CartButton = () => {
  const dispatch = useDispatch()

  const { items, totalAmount, totalQuantity } = useSelector((state) => state.cart)
  const showCart = useSelector((state) => state.ui.cartIsVisible)

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  const cartCloseHandler = () => {
    dispatch(uiSliceActions.toggle())
  }

  const clearCardHandler = () => {
    if (items.length > 0) {
      dispatch(cartSliceActions.resetCart())
      dispatch(uiSliceActions.toggle())
      toast.success('Your order is placed')
    } else {
      toast.error('Your cart is empty')
    }
  }

  return (
    <>
      {showCart && (
        <>
          <div className='overlay' onClick={cartCloseHandler}></div>
          <div className='cart-wrapper'>
            <h2>Your Order</h2>
            <ul className='cart-list'>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                  }}
                />
              ))}
            </ul>
            <div className='button-wrapper'>
              <div className='cart-button'>
                <div className='basket-btn'>
                  <BsBasket />
                </div>
                <span>$ {totalAmount.toFixed(2)}</span>
                <button className='order-btn' onClick={clearCardHandler}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className='button-wrapper'>
        <button className='cart-button' onClick={toggleCartHandler}>
          <div className='basket-btn'>
            <BsBasket />
          </div>
          <span> {totalQuantity}</span>
        </button>
      </div>
    </>
  )
}

export default CartButton

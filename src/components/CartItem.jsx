import React from 'react'

const CartItem = () => {

let price = 5
let quantity = 1
let title = 'Pancakes'

  return (
    <li className='item'>
    <div className='item-header'>
      <h3>{title}</h3>
      <div className='price'>
        ${'5'}
        <span className='itemprice'>(${price.toFixed(2)}/item)</span>
      </div>
    </div>
    <div className='details'>
      <div className='quantity'>
        x <span>{quantity}</span>
      </div>
      <div className='actions'>
        <button >-</button>
        <button >+</button>
      </div>
    </div>
  </li>
  )
}

export default CartItem
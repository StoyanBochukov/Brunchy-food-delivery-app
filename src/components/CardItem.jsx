import React from 'react'
import {BsBasket} from 'react-icons/bs'

const CardItem = ({ product }) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={product.image} alt="" />
        </div>
        <div className="card-content">
            <h1 className="item-title">{product.title}</h1>
            <p className="item-desc">{product.desc}</p>
            <p className="item-price"><span>$</span> {product.price}</p>
        </div>
        <div className="basket">
            <BsBasket />
        </div>
    </div>
  )
}

export default CardItem
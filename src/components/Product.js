import React from 'react'
import './Product.css'

function Product(title, price, rating, img) {
  return (
    <div className='product' key='product'>
      <div className='product_info' key='info'>

        <div className='product_title' key='1'>
          <p>{title}</p>
        </div>

        <div className='product_price'>
          <small key='symbol'><>&#x20B9;</></small>
          <strong key='2'>{price}</strong>
        </div>

        <div className='product_rating' key='rating'>
          {rating}
        </div>

      </div>

      <img className='product_image' src={img} alt='product image' />

      <button>Add to Cart</button>
    </div>
  )
}

export default Product
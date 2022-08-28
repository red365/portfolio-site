import React, { useState, useEffect, useRef } from 'react';
import products from 'products';
import Product from './Product,jsx';

const Products = props => {

  return (
    <>
      {products.map(product => {
        return (
          <Product {...product} />
        )
      })}
    </>
  )

}

export default Products;
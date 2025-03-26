

import React from 'react'
import { useParams } from 'react-router-dom';

const productData = {
    1: { name: "Baby Stroller", price: "$200", description: "Comfortable stroller for your baby." },
    2: { name: "Baby Bottle", price: "$20", description: "Safe and BPA-free feeding bottle." },
    3: { name: "Diapers", price: "$50", description: "Soft and absorbent baby diapers." },
  };

function ProductDetails() {

    const {id} = useParams()
    const product = productData[id]

    if(!product){
        return <h2>Product NOt Found</h2>
    }
  return (
    <div>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        
    </div>
  )
}

export default ProductDetails
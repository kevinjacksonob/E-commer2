import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productsId/ProductInfo'
import SimilarProduct from '../components/productsId/SimilarProduct'
import SliderImgs from '../components/productsId/SliderImgs'
import './style/productId.css'

const ProductId = () => {

  const [product, setProduct] = useState()

  
  const { id } = useParams()
  
  useEffect(() => {
    
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
    
  }, [id])
  
  
  

  

  return (
    <div>
      <div className="producto_info_container">
        {
        product && <SliderImgs product={product} />
        }
        <ProductInfo product={product}/>
      </div>
    
      <SimilarProduct product={product} />
    </div>
  )
}

export default ProductId
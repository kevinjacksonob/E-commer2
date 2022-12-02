import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    


    const dispatch = useDispatch()

    const handleFetchCategory = (id) =>{
        if(id){
            dispatch(getProductsByCategory(id))
        } else {
            dispatch(getAllProducts())
        }
    }

    return (
        <article className="filterCategory">
            <h3 className="filterCategory__title">Category</h3>
            <ul className="filterCategory__list">
                <li className="filterCategory__list_item" onClick={handleFetchCategory} style={{cursor: 'pointer'}}>All Products</li>
                {
                    categories?.map(category =>(
                        <li key={category.id}
                        className="filterCategory__list_item"
                        onClick={() => handleFetchCategory(category.id)}
                        style={{cursor: 'pointer'}}
                        
                        >{category.name}
                       
                        </li>
                    ))
                }
            </ul>
        </article>

    )
}

export default FilterCategory
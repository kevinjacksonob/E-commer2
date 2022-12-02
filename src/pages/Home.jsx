import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './style/home.css'

const Home = () => {

    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText]  = useState()
    const [filterByPrice, setFilterByPrice]  = useState({
        from: 0,
        to: Infinity
})

    console.log(filterByPrice);

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    useEffect(() => {
        if(inputText !== ''  &&  products){
          const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
          setFilterByText(products.filter(cb))
        } else {
          setFilterByText(products)
        }
      }, [inputText, products])
    

    const callBackFilterByPrice = (product) => {
        return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
    } 
    

    return (
        <main className="home">
            <div className="filters__container">
                <InputSearch  inputText={inputText} setInputText={setInputText}/>
                <FilterPrice setFilterByPrice={setFilterByPrice} />
                <FilterCategory/>
            </div>

            <div className="home__container">
                <InputSearch  inputText={inputText} setInputText={setInputText}/>
                {                  
                   filterByText?.filter(callBackFilterByPrice).map(product => (
                        <CardProduct 
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Home
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'



import './App.css'
import Home from './pages/Home'
import axios from 'axios'
import { useEffect } from 'react'
import LoginScreen from './pages/LoginScreen'
import getConfig from './utils/getConfig'
import Header from './components/shared/Header'

function App() {
  
    /* useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    
    const data = {
      firstName: 'Brayan Ricardo',
      lastName: 'Macias',
      email: 'brayan4655@academlo.com',
      password: '123456789',
      phone: '3204396627',
      role: 'admin'
    }

    
    axios.post(URL, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])  */ 
  

  useEffect(() => {
    
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    

    axios.get(URL, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <div className="App">

    <Header/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductId />} />
      <Route path="/login" element={<LoginScreen/>} />

      <Route  elemet={<ProtectedRoutes />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/purchases" element={<Purchases />} />

    </Routes>
    </div>
  )
}

export default App

import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({inputText, setInputText}) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <input className="inputSearch" placeholder="¿Qué estás buscando?" value={inputText} onChange={handleChange} type="text" />
  )
}

export default InputSearch

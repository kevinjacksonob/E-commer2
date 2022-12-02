import React from 'react'
import './styles/filterPrice.css'


const FilterPrice = ({setFilterByPrice}) => {

    const HandleSubmit = (e) => {
        e.preventDefault();
      
        const from = +e.target.from.value
        const to = +e.target.to.value

        const obj ={
            from:  from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }

    return (
        <form onSubmit={HandleSubmit} className="filterPrice" action="">
            <h3 className="filterPrice__title">Price</h3>
            <div className="input_container">
                <label className="input_container_label" htmlFor="from">From</label>
                <input className="input_container_input" type="text" id="from" />
            </div>
            <div className="input_container">
                <label className="input_container_label" htmlFor="to">To</label>
                <input className="input_container_input" type="text" id="to" />
            </div>
            <button className="input_container_btn">Filter</button>
        </form>
    )

}

export default FilterPrice
import React from 'react'
import './style/cardPurchase.css'

const CardPurchase = ({ purchase }) => {

    console.log(purchase)
    return (
        <article className="card__purchase">
            <header>{purchase.updateAt}</header>
            <div>
                {
                    purchase.cart.products.map(product => (
                        <section className="product_info_container" key={product.id}>
                            <h3 className="product_info_title">{product.title}</h3>
                            <div className="product_info_quantity">{product.productsInCart.quantity}</div>
                            <div className="product_info_price">${product.price}</div>
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CardPurchase
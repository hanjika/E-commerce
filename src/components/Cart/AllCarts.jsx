import React from 'react';
import Moment from 'moment';
import CartProduct from './CartProduct';

const AllCarts = ({ carts }) => {
    return (
        <section className='all-carts'>
            <ul>
                {carts.map(cart => (
                    <li key={cart.id} className='single-cart'>
                        <p>Date of purchase: {Moment(cart.date).format('DD-MM-YYYY')}</p>
                        <ul>
                            {cart.products.map(product => (
                                <CartProduct product={product} />                      
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AllCarts;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const RemoveCartProduct = ({ product, currentCart, setCurrentCart, total, setTotal, setAddOrRemove }) => {
    const removeProduct = () => {
        setAddOrRemove('remove');
        setTotal(total - product.price * product.quantity);
        let updatedCart = currentCart.filter(cartProduct => cartProduct.productId !== product.productId);
        setCurrentCart(updatedCart);
    }

    return (
        <div className='remove-cart-product'>
            <FontAwesomeIcon onClick={() => removeProduct()} icon={faTrash} size='2x' cursor='pointer' />
        </div>
    )
}

export default RemoveCartProduct;

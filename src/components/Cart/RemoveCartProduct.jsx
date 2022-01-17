import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const RemoveCartProduct = ({ product, currentCart, setCurrentCart }) => {
    return (
        <div className='remove-cart-product'>
            <FontAwesomeIcon onClick={() => console.log('remove')} icon={faTrash} size='2x' cursor='pointer' />
        </div>
    )
}

export default RemoveCartProduct;

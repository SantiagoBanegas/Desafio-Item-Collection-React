import React, { useContext } from 'react'
import {cartCtx} from "../Context/cartContext"

function CartView() {
    const context = useContext(cartCtx);
    const {cartItem} = context;
    let carritoVacio = true;

    if(carritoVacio) {
        <div>
            Tu carrito esta vacio!
        </div>
    }


    return (
    <div>
        {cartItem.map((item) => (
            <div>
                <h3>{item.tittle}</h3>
                <p>{item.price}</p>
            </div>
        ))}
    </div>
    )
}

export default CartView;
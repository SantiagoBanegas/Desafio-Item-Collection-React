import React, { useContext } from 'react'
import {cartCtx} from "../Context/cartContext"

function CartView() {
    const context = useContext(cartCtx);
    const {cart} = context;
    let carritoVacio = true;

    if(carritoVacio) {
        return <div>Tu carrito esta vacio</div>;
    }
    return (
    <div>
        {cart.map((item) => (
            <div>
                <h3>{item.tittle}</h3>
                <p>{item.price}</p>
            </div>
        ))}
    </div>
    )
}

export default CartView
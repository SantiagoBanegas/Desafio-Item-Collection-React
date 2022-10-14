import React, {useContext} from "react";
import { cartCtx } from "../Context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";

// import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    const {cartItem} = useContext(cartCtx)
    return(
        <div>
        <FontAwesomeIcon icon={faCartArrowDown}/> 
        <span>{cartItem.length}</span>
        </div>
    );
}

export default CartWidget

import React, {useState, createContext} from "react";

const cartCtx = createContext();

export default function CartContexProvider({children}) {

    const [cartItem, setCartItem] = useState([]);

    //Agrega producto al carrito sin pisar los productos existentes en el mismo.
    function addItem(item, count){
        let newCartItem = cartItem.map(item => item);
        
        newCartItem.push({...item,count});
        setCartItem(newCartItem);

        if (isInCart(newCartItem.id)){
            const findProduct = cartItem.find(x => x.id === newCartItem.id)
            const productPosicion = cartItem.index.Of(findProduct)
            const auxArray = [...cartItem]
            auxArray[productPosicion].count += count
            setCartItem(auxArray)
        }else{
            setCartItem([...cartItem, newCartItem])
        }
    }

    // Metodo some - Indica si el producto agregado al carrito ya existe o no.
    function isInCart(id){
        return cartItem.some(x => x.id === id)
    }


    //Borra todos los productos de nuestro cartItem.
    function emptyCart(){
        return setCartItem([])
    }

    //Borrar un producto en especifico del carrito.
    function deleteItem(id){
        return setCartItem(cartItem.filter(x => x.id !== id ))
    }


    //Retorna cantidad de unidades que tiene nuestro carrito, diferente al length que retorna cantidad de elementos.
    function GetItemQty(){
        return cartItem.reduce((acumulacion, x) => acumulacion += x.count, 0 )
    }


    //Retorna suma de precios de nustros productos.
    function getItemPrice(){
        return cartItem.reduce((acumulacion, x) => acumulacion * x.price, 0 )
    }

    return(
        
        <cartCtx.Provider value={{ cartItem, addItem, isInCart, emptyCart, deleteItem, GetItemQty, getItemPrice}}>
        {children}
        </cartCtx.Provider>
    )
}

export {cartCtx};
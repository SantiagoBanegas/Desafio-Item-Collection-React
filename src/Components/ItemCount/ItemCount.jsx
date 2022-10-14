import React, {useState} from 'react'

function ItemCount(props) {
    const [count, setCount] = useState(props.unidadInicial)

    function handleSubtract(){
        if (count > 1){
            setCount(count - 1)
        }
        else{
            alert("1 es el minimo de compra")
    }
    }
    
    function handleAdd(){
        if (count < props.stock){
            setCount( count + 1)
        }
        else{
            alert("No hay mas stock")
    }
    }
    

return (
    <div>
        <div>
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
        <div className='itemCountBtn'>
            <button onClick={() => props.onAddToCart(count)}>
                    Agregar al Carrito
            </button>
        </div>
    </div>
    );
}

export default ItemCount
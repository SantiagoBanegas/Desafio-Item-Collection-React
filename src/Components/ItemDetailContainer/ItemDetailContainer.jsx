import React, {useState, useEffect} from 'react';
import { getSinlgeItems } from '../../Services/mockAPI';
import CardDetail from './CardDetail';
import {useParams} from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'



function ItemDetailContainer() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        getSinlgeItems(id)
        .then((respuestaDatos) => setData(respuestaDatos))
        .catch((errormsg) => setError(errormsg.message))
    }, [id]);

    if (!data.id) {
        return <>
        {error ? <div><h2 style={{color: "#aa0033"}}>Error obteniendo los datos</h2> <p>{error}</p></div> : <DotSpinner size={40} speed={0.9}  color="black" /> }
        </>
    }

    return (
        <CardDetail
            item={data}
            key={data.key} 
            img={data.img}
            tittle={data.tittle}
            detail={data.detail}
            paginas={data.paginas}
            autor={data.autor}/> 
            
    )
}

export default ItemDetailContainer

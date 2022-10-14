import React from "react";
import "./card.css";
import Button from "../Button/Button"
import { Link } from "react-router-dom";


function Card(props) {

    const urlDetalle = `/detalle/${props.id}`;
    return( 
        <div className="card">
            <div className="card-img">
                <img src= {props.img} alt="card img" />
            </div>
            <div className="card-detail">
                <h2> {props.tittle} </h2>
                <h5>{props.category}</h5>
                <p> {props.detail} </p>
                <h4>$ {props.price} </h4>
            </div>
            
        <Button >
            <Link to= {urlDetalle}>Ver Mas</Link>        
        </Button>
        </div>
    )

}

export default Card;
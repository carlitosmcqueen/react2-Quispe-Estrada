import React from "react";
import { Link } from "react-router-dom";

import "./item.css";


const ItemCaja=({producto})=>{

    return (

            <div id="caja">
                <div className="cajaTexto">
                    <img className="img" src={producto.image} alt={producto.title}></img>
                    <div className="texto">
                        <p>Producto : {producto.title}</p>
                        <p>Precio : {producto.price}</p>
                    </div>
                    
                </div>
                <div className="cajaBoton">
                <Link id="botonListLink" to={`/detail/${producto.id}`}><button id="botonList">Ver detalles</button></Link>

                </div>
                
            </div>
            
        
    )
    
}
export default ItemCaja
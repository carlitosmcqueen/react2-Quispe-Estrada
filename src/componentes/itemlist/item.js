import React from "react";
import { Link } from "react-router-dom";

import "./item.css";


const ItemCaja=({producto})=>{

    return (

            <div id="caja">
                <div class="cajaTexto">
                    <img class="img" src={producto.image} alt={producto.title}></img>
                    <div class="texto">
                        <p>Producto : {producto.title}</p>
                        <p>Precio : {producto.price}</p>
                    </div>
                    
                </div>
                <div class="cajaBoton">
                <Link id="botonListLink" to={`/detail/${producto.id}`}><button id="botonList">Ver detalles</button></Link>

                </div>
                
            </div>
            
        
    )
    
}
export default ItemCaja
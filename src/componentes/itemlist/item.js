
import React from "react";
import "./item.css";


const ItemCaja=({producto})=>{
    return (

            <div id="caja">
                <h3>Lista de productos: </h3>
                <p class="lista">Nombre de producto :  {producto.nombre}</p>
                <p class="lista">Descripción : {producto.description}</p>
                <p class="lista">Precio :{producto.precio}</p>
            </div>

        
    )
    
}
export default ItemCaja
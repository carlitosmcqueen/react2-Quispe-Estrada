import React from 'react';
import "./itemdetail.css"

const ItemDetail=({detalles})=>{
    return(

        <div id="cajaDetalle">
            <div id="cajaDetalleImg">
                <img id="pepito" src={detalles.image} alt="ropa"></img>
                <div id="cajaDetalleDatos">
                    <h1 id="tituloDetalle">{detalles.title}</h1>
                    <p id="descripcionDetalle">{detalles.description}</p>
                </div>
                
            </div>
            <div id="cajaPrecio">
                <p>Precio: {detalles.price}</p>
            </div>
        </div>
    )
}
export default ItemDetail
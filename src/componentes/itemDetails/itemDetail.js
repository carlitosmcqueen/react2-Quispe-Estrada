import React from 'react';
import ItemCount from '../itemcount/itemCount'
import "./itemD.css";

const ItemDetail=({detalles})=>{
    
    const onAdd = (dato,datin)=>{
        datin("El producto "+[dato]+" se agrego al carrito");
             
    }



    return (
        
        <div class="cajaProducto">
            <div class="cajaProductoD">
                <div>
                    <img src={detalles.image} alt={detalles.title}></img>
                </div>
                <div class="cajaProductoTexto">
                    <p>{detalles.title}</p>
                    <p>{detalles.description}</p>
                    <p> Precio : {detalles.price}</p>
                </div>

            </div>
            
            <ItemCount producto={detalles.title} stock={detalles.stock} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}
export default ItemDetail
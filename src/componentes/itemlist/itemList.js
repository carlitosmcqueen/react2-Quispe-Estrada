import React from 'react';
import ItemCaja from "./item";
import "./item.css"

const ItemList=({listaProductos})=>{
    return (
        <div>
            {listaProductos.map((producto)=><ItemCaja key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList;


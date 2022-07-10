import React,{useState} from 'react';
import ItemCount from '../itemcount/itemCount'
import { Link } from "react-router-dom";
import "./itemD.css";

import "./itemD.css";

const ItemDetail=({detalles})=>{
    const [estado,setEstado]=useState(false);
    
    const onAdd = (dato,datin)=>{
         datin("El producto "+[dato]+" se agrego al carrito");
             
    }
    const confirmar=()=>{
        setEstado(true)
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
            {estado ? <Link id="botonConfirmarLink" to="./cart"><button id="botonConfirmar">Confirmar Compra</button></Link> :<ItemCount producto={detalles.title} stock={detalles.stock} initial={1} onAdd={onAdd}  confirmar={confirmar}></ItemCount>}
            
        </div>
    )
}
export default ItemDetail
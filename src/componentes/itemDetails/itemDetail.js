import React,{useState,useContext} from 'react';
import ItemCount from '../itemcount/itemCount'
import { Link } from "react-router-dom";
import "./itemD.css";
import {contexto} from "../Context/CartContext"

const ItemDetail=({detalles})=>{
    const [estado,setEstado]=useState(false);

    const {addProduct}=useContext(contexto);
    
    const onAdd = (contador)=>{
        addProduct({...detalles, qty: contador});
        setEstado(true)
    }
    
    return (
        
        <div id="cajaProducto">
            <div id="cajaProductoD">
                <div>
                    <img id="imagenDetalle" src={detalles.image} alt={detalles.title}></img>
                </div>
                <div className="cajaProductoTexto">
                    <p>{detalles.title}</p>
                    <p>{detalles.description}</p>
                    <p> Precio : {detalles.price}</p>
                </div>
            </div>
            {estado ? <div id="links"><Link id="botonConfirmarLink" to="/cart"><button id="botonConfirmar">Ir al carrito</button></Link><Link id="jose" to="/"><button id="volver">Seguir comprando</button></Link></div> :<ItemCount producto={detalles.title} stock={detalles.stock} initial={1} onAdd={onAdd}></ItemCount>}
        </div>
    )
}
export default ItemDetail
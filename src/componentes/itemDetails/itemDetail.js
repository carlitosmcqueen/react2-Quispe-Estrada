import React,{useState,useContext} from 'react';
import ItemCount from '../itemcount/itemCount'
import { Link } from "react-router-dom";
import "./itemD.css";
import {contexto} from "../Context/CartContext"



const ItemDetail=({detalles})=>{
    const [estado,setEstado]=useState(false);

    const {addProduct}=useContext(contexto)
    
    const onAdd = (dato,datin)=>{
        datin("El producto "+[dato]+" se agrego al carrito");

             
    }
    const confirmar=(contador)=>{

        addProduct({...detalles, qty: contador});
        
        setEstado(true)
        
    }
    


    return (
        
        <div className="cajaProducto">
            <div className="cajaProductoD">
                <div>
                    <img id="imagenDetalle" src={detalles.image} alt={detalles.title}></img>
                </div>
                <div className="cajaProductoTexto">
                    <p>{detalles.title}</p>
                    <p>{detalles.description}</p>
                    <p> Precio : {detalles.price}</p>
                </div>

            </div>
            {estado ? <Link id="botonConfirmarLink" to="/cart"><button id="botonConfirmar">Ir al carrito</button></Link> :<ItemCount producto={detalles.title} stock={detalles.stock} initial={1} onAdd={onAdd}  confirmar={confirmar}></ItemCount>}
            
        </div>
    )
}
export default ItemDetail
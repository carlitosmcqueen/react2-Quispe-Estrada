import React,{useState} from 'react';
import {useContext} from 'react';
import {contexto} from "../Context/CartContext";
import { Link } from 'react-router-dom';

import "./cart.css"

const Carta=()=>{

    const {productos,deleteProduct,clear,calcularTotal}=useContext(contexto);

    if(productos.length===0){
        return <h2>Su carrito esta vacio, puede llenarlo <Link to="/">acá</Link></h2>
    }


    return (
        <>
        {productos.map((lista)=><div id="ListaCompra" key={lista.id}>
            <div id="ListaCompraDatos">
                <img id="imagenLista" src={lista.image} alt={lista.title}></img>
                <div id="ListaCompraDatosDetalles">
                    <h3>Producto: {lista.title}</h3>
                    <h3>Precio: {lista.price}</h3>
                    <h3>Cantidad: {lista.qty}</h3>
                </div>
                
            </div>
            <div>
                <button id="ListaBorrar" onClick={()=>deleteProduct(lista.id)}>Borrar Producto</button>
            </div>    
        </div>)}
        <h3>Total :${calcularTotal()}</h3>
        <button onClick={()=>clear()}>Cancelar Compra</button>
        <Link to="/Compra"><button>Compra</button></Link>

        </>
    )
}

export default Carta

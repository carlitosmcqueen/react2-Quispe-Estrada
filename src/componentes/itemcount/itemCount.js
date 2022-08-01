import React,{useState,useContext} from 'react';
import "./itemCount.css";
import mas from "../../imagenes/suma.png";
import menos from "../../imagenes/resta.png";
import carrito from "../../imagenes/carrito.png";
import {contexto} from "../Context/CartContext";




const Count =({producto,stock,initial,onAdd})=>{

    const {productos}=useContext(contexto)
    const [contador,setContador]=useState(initial);
    const [cantidad,setStock]=useState(stock);
    const [productosM,setProductos]=useState(producto);

    const suma=()=>{
        setContador(contador+1);
        setStock(cantidad-1);
        if (cantidad===0){
            setStock(0);
            setContador(stock+1);
        }
    }
    const resta = ()=>{
        setContador(contador-1);
        setStock(cantidad+1);
        if(cantidad===stock){
            setStock(stock)
            setContador(initial)
        }

    }
    const comprar = (e)=>{
        onAdd(contador)
        localStorage.setItem("lol",JSON.stringify(productos));
    }
    return(
        <div id="ventas">
            <div id="producto">
                <p>{productosM}</p>
                <p>El stock disponible es de {cantidad}</p>
            </div>
            <div id="cuentas">
                <p>COMPRAR : {contador}</p>
                <button className="botoncito" onClick={suma}><img className="botoncitoImg" src={mas} alt="suma"></img></button>
                <button className="botoncito" onClick={resta}><img className="botoncitoImg" src={menos} alt="resta"></img></button>
                <button className="botoncito" onClick={comprar}><img className="botoncitoImg" src={carrito} alt="comprar"></img></button>

            </div>
        </div>
    )
}
export default Count;
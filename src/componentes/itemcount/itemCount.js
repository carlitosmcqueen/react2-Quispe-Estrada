import React,{useState} from 'react';
import "./itemCount.css";

const Count =({producto,stock,initial,onAdd})=>{

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
        
    }
    return(
        <div id="ventas">
            <div id="producto">
                <p>{productosM}</p>
                <p>El stock disponible es de {cantidad}</p>
            </div>
            <div id="cuentas">
                <p>COMPRAR : {contador}</p>
                <button className="botoncito" onClick={suma}><img className="botoncitoImg" src="https://i.pinimg.com/originals/38/7c/e6/387ce6da9e9f03ff6cd8abc680e974be.png" alt="suma"></img></button>
                <button className="botoncito" onClick={resta}><img className="botoncitoImg" src="https://cdn-icons-png.flaticon.com/512/51/51363.png" alt="resta"></img></button>
                <button className="botoncito" onClick={comprar}><img className="botoncitoImg" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="comprar"></img></button>

            </div>
        </div>
    )
}
export default Count;
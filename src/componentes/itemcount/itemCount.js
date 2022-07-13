import React,{useState} from 'react';
import "./itemCount.css";
import mas from "../../imagenes/suma.png";
import menos from "../../imagenes/resta.png";
import carrito from "../../imagenes/carrito.png";



const Count =({producto,stock,initial,onAdd,confirmar})=>{
    
    const [contador,setContador]=useState(initial);
    const [cantidad,setStock]=useState(stock);
    const [productos,setProductos]=useState(producto);


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
    const comprar = ()=>{
        onAdd(productos,setProductos)
        
        confirmar(contador)
        

    }
    

    return(
        <div id="ventas">
            <div id="producto">
                <p>{productos}</p>
                <p>El stock disponible es de {cantidad}</p>
            </div>
            <div id="cuentas">
                <p>COMPRAR : {contador}</p>
                <button onClick={suma}><img class="botoncito" src={mas} alt="suma"></img></button>
                <button onClick={resta}><img class="botoncito" src={menos} alt="resta"></img></button>
                <button onClick={comprar}><img class="botoncito" src={carrito} alt="comprar"></img></button>

            </div>
        </div>
    )
}
export default Count;
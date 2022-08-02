import React ,{useContext}from 'react';
import {contexto} from '../Context/CartContext';
import "./cartWidget.css"

const CartWidget =()=>{
    const {qtyProducts}=useContext(contexto);
    return(
        
        <div id="cajaCart">
            <img id="imagenCart" src="https://i.postimg.cc/Prm1m4gb/carrito.png" alt="carticon" />
            <h3>{qtyProducts > 0 &&  qtyProducts}</h3>
        </div>
    )
}
export default CartWidget

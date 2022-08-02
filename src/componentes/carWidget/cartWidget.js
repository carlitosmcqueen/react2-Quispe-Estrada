import React ,{useContext}from 'react';
import {contexto} from '../Context/CartContext';
import "./cartWidget.css"

const CartWidget =()=>{
    const {qtyProducts}=useContext(contexto);
    return(
        
        <div id="cajaCart">
            <img id="imagenCart" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="carticon" />
            <h3>{qtyProducts > 0 &&  qtyProducts}</h3>
        </div>
    )
}
export default CartWidget

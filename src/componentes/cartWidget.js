import React ,{useContext}from 'react';
import carrito from '../imagenes/carrito.png';
import {contexto} from './Context/CartContext';

const CartWidget =()=>{

    const {qtyProducts}=useContext(contexto);
    
    return(
        <>
        <div caja style={styles.caja}>
        <img style={styles.imagen} src={carrito} alt="carticon" />
        <p>{qtyProducts}

        
        </p>
        
        </div>
        </>
    )
}
export default CartWidget

const styles ={
    caja: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:"7vh",
        width:"20vw",
         
        
    },
    imagen:{
        height:"70%",
        width:"40%",
    },
}
import React from 'react';
import carrito from '../imagenes/carrito.png';

const cartWidget =()=>{
    return(
        <div caja style={styles.caja}>
        <img style={styles.imagen} src={carrito} alt="carticon" />
        </div>
    )
}
export default cartWidget

const styles ={
    caja: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:"7vh",
         
        
    },
    imagen:{
        height:"70%",
        width:"90%",
    },
}
import React from 'react';
import ItemCount from "./itemCount"


const itemList=({greeting})=>{
    const onAdd = (dato,datin)=>{
        
        datin("El producto "+[dato]+" se agrego al carrito");
        
       
    }

    return(  

        <>
        <h3 style={styles.posicion}>{greeting}</h3>
        <ItemCount producto="ARROZ GALLO" stock={5} initial={1} onAdd={onAdd}></ItemCount>
        <ItemCount producto="FIDEOS MATARAZZO" stock={10} initial={1} onAdd={onAdd}></ItemCount>
        <ItemCount producto="LECHE DE COCO" stock={12} initial={1} onAdd={onAdd}></ItemCount>
    </>
    )


}

export default itemList

const styles ={
    posicion:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
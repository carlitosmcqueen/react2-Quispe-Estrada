import React from 'react';

const itemList=({greeting})=>{
    return(
        <h3 style={styles.posicion}>{greeting}</h3>
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
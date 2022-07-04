import React from 'react';
import Datos from "./item"


const Jose=({listaProductos})=>{

    return (
        <div>
            
            {listaProductos.map((producto)=><Datos key={producto.id} producto={producto}/>)}

        </div>
    )
}
export default Jose;

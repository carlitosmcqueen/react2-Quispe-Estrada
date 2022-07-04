import React,{useState,useEffect} from 'react';
import ListaApi from './itemDetail'

const GetItem =({detalles})=>{

   
    return (
        <div>
            {detalles.map((detalles)=><ListaApi key={detalles.id} detalles={detalles}></ListaApi>)}
        </div>
    )


}
export default GetItem


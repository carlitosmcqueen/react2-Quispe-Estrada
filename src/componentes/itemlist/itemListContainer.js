import React,{useState,useEffect} from 'react';
import { getProds } from '../../mock/productos';
import {useParams} from 'react-router-dom';
import ItemList from "./itemList";



const ListaMercado=({greeting})=>{
    const [listaProductos,setlistaProductos]=useState([]);
    const [carga,setCarga]=useState(true);

    const {categoryId}=useParams();
    //son los :category
    console.log(categoryId);



    useEffect(()=>{
        getProds(categoryId)
            .then((res) => {
                setlistaProductos(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCarga(false);
            }); 

    },[categoryId])
    
    
    return(  
        <>
        <h3 style={styles.posicion}>{greeting}</h3>

        <div style={styles.cards}>
        {carga ? <p>cargando...</p> :<ItemList listaProductos={listaProductos}></ItemList>}
        </div>

    </>
    )


}
export default ListaMercado

const styles ={
    posicion:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
    }
}


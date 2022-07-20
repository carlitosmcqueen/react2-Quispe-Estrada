import React,{useState,useEffect} from 'react';
import { getProds } from '../../mock/productos';
import {useParams} from 'react-router-dom';
import ItemList from "./itemList";
import {db} from '../../firebase/firebase';
//query hacer una consulta con un filtro
import { getDocs,collection, query,where} from 'firebase/firestore';



const ListaMercado=({greeting})=>{
    const [listaProductos,setlistaProductos]=useState([]);
    const [carga,setCarga]=useState(true);

    const {categoryId}=useParams();
    //son los :category
    console.log(categoryId);
    



    useEffect(()=>{

        const qr = categoryId?query(collection(db,"productos"),where("category","==",categoryId))
        :collection(db,"productos")

        //si pongo qr en getDocs apara solo las remeras
        getDocs(qr)
        .then(result=>{

            //dento de result tengo mucho datos y entre ellos solo data me sirve amenos que quiera saber mas datos 
            const lista=result.docs.map(doc=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log(lista)
            setlistaProductos(lista)
        })
        .catch(error => console.log(error))
        .finally(()=> setCarga(false))
        

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


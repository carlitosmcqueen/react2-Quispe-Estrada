import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import "./itemD.css";
import {db} from '../../firebase/firebase'
import {doc,getDoc,collection} from 'firebase/firestore';

const GetItem =()=>{
    const [detalles,setDetalles] =useState({});
    const [carga,setCarga] =useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const productosCollection =collection(db,"productos")
        const refDoc = doc(productosCollection,id);

        getDoc(refDoc).then(result=>{

            setDetalles({
                id: result.id,
                ...result.data(),
            }); 

        })
        .catch(err=>console.error(err))
        .then(()=>setCarga(false))
    },[id])   
    return (
        <div id="itemDetailConteiner">
            {carga?<h3>CARGANDO...</h3>:<ItemDetail  detalles={detalles}></ItemDetail>}  
        </div>
    )


}
export default GetItem


import React,{useState,useEffect} from 'react';
import { getProd } from '../../mock/productos';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail'


const GetItem =()=>{
    const [detalles,setDetalles] =useState({});
    const [carga,setCarga] =useState(true);
    //ATENTO A ESTO
    const {id} = useParams();

    
    useEffect(()=>{
        getProd(id)
            .then((res) => {
                setDetalles(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCarga(false);
            }); 

    },[id])
    
    return (
        <div>
            {carga?<h3>CARGANDO...</h3>:<ItemDetail detalles={detalles}></ItemDetail>}  
        </div>
    )


}
export default GetItem


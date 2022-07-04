import React,{useState,useEffect} from 'react';
import ItemCount from "../itemcount/itemCount";
import ItemList from "./itemList";
import DetallesItem from '../itemDetails/itemDatailContainer'



const ListaMercado=({greeting})=>{
    const [listaProductos,setlistaProductos]=useState([]);
    const [carga,setCarga]=useState(true);
    const [detalles,setDetalles] =useState([]);


    const lista =[
        {id:"1", nombre:"arroz",description:"arroz marca gallo 1 kilo", precio:100,codigo:"748297"},
        {id:"2", nombre:"fideos", description:"fideos marca matarrazo 1 kilo", precio:90, codigo:"9947331"},
        {id:"3", nombre:"leche de coco", description:"leche a base de coco 1 litro", precio:200,codigo:"0583813"},
    
    ]

                
    useEffect(()=>{
        const mostrarLista = new Promise((resolve, reject) => {
            let condition = true;

            setTimeout(() =>{
                if (condition){
                    resolve(lista)
                }else{
                    reject("ERROR")
                }
            },3000);
        })
        
        mostrarLista.then((res) =>setlistaProductos(res))
        .catch((err) =>console.error(err))
        .finally(() =>{setCarga(false)})
        
    },[])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=3')
        .then(
            res=>res.json())
        .then(json =>setDetalles(json))

    },[])

   


    const onAdd = (dato,datin)=>{
        datin("El producto "+[dato]+" se agrego al carrito");
         
    }
    return(  
        <>
        <h3 style={styles.posicion}>{greeting}</h3>

        
        {carga ? <p>cargando...</p> :<ItemList listaProductos={listaProductos}></ItemList>}
        
        <ItemCount producto="ARROZ GALLO" stock={5} initial={1} onAdd={onAdd}></ItemCount>
        <ItemCount producto="FIDEOS MATARAZZO" stock={10} initial={1} onAdd={onAdd}></ItemCount>
        <ItemCount producto="LECHE DE COCO" stock={12} initial={1} onAdd={onAdd}></ItemCount>

        

        <DetallesItem detalles={detalles}></DetallesItem>

    </>
    )


}
export default ListaMercado

const styles ={
    posicion:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}



/*useEffect(()=>{
        const mostrarLista = new Promise((resolve, reject) => {
            let condition = true;
            setTimeout(() =>{
                if(condition){
                    resolve(lista);
                }
            },3000);
        })

        mostrarLista.then((res) =>setlistaProductos(res))
        .finally(() =>setCarga(!carga));
    },[boton])

    console.log(listaProductos)*/

    /*    
useEffect(()=>{
    setTimeout(()=>{
        setlistaProductos(lista);
        setCarga(!carga)
    },3000)
},[boton]) */
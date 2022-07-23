import React,{useState,useContext} from 'react';
import {contexto} from "../Context/CartContext";
import {db} from '../../firebase/firebase';
import { collection,addDoc,serverTimestamp} from 'firebase/firestore';
import "./buydate.css"

const BuyDate=()=>{
    const {productos,calcularTotal}=useContext(contexto);
    const [buyer,setBuyer] = useState([])
    const [ventaId,setventaId] = useState("")

    const [items,setItems] = useState(productos)

    
    const finalizarCompra=()=>{
        
        const ventasUsuario = collection(db,"ventas");
    
        addDoc(ventasUsuario,{
            items,
            buyer,
            date:serverTimestamp(),
            total:calcularTotal(),
        })
        .then(result=>{
            alert("se completo la compra")
            setventaId(result.id);})
    }
    const datosUser=(e)=>{
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
            
        })
        
    }
    
    return (
        <>
        <div id="buy">
            <input type="text" placeholder="nombre" name="nombre" onChange={datosUser}></input>
            <input type="text" placeholder="email" name="email" onChange={datosUser}></input>
            <input type="number" placeholder="phone" name="phone" onChange={datosUser}></input>
            <button onClick={finalizarCompra}>Confirmar Compra</button>
        </div>
        </>
    )
}
export default BuyDate
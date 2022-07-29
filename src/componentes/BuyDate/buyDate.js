import React,{useState,useContext} from 'react';

import {contexto} from "../Context/CartContext";

import {db} from '../../firebase/firebase';

import { collection,addDoc,serverTimestamp} from 'firebase/firestore';

import "./buydate.css"

import {  useNavigate } from 'react-router-dom';



const BuyDate=()=>{

    const {productos,calcularTotal, clear}=useContext(contexto);
    const [buyer,setBuyer] = useState([])
    const [ventaId,setventaId] = useState("")
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const finalizarCompra=()=>{
        //aca borro "lol" y se convierte en null
        localStorage.removeItem("lol");
        if(Object.values(buyer).length === 3){

            setError(false)

            const ventasUsuario = collection(db,"ventas");

                addDoc(ventasUsuario,{
                    items : productos,
                    buyer,
                    date:serverTimestamp(),
                    total:calcularTotal(),
                })
                .then(result=>{

                    setventaId(result.id);})

                    clear()

                .catch((error) =>{

                    console.log(error)
        })
        }else{
            setError(true)

        }
    }
    const datosUser=(e)=>{
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value

        })
    }
    return (

        <>

        {!ventaId 

        ?<div id="buy">

            <input type="text" placeholder="nombre" name="nombre" onChange={datosUser}/>

            <input type="text" placeholder="email" name="email" onChange={datosUser}/>

            <input type="number" placeholder="phone" name="phone" onChange={datosUser}/>

            <button onClick={finalizarCompra}>Confirmar Compra</button>

            {error && <p style={{color:'red'}}>Todos los campos son requeridos</p>}

        </div>

        :<div>

            <h3>Muchas gracias por tu compra!</h3>

            <h5>Tu orden : {ventaId}</h5>

            <button onClick={()=>navigate('/')}>Volver</button>

        </div>

        }
        </>

    )

}

export default BuyDate
import React,{useState,useContext} from 'react';
import {contexto} from "../Context/CartContext";
import {db} from '../../firebase/firebase';
import { collection,addDoc,serverTimestamp} from 'firebase/firestore';
import "./buydate.css"
import {  Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"


const BuyDate=()=>{

    const {productos,calcularTotal,clear,loginUser,usuarioLogeado}=useContext(contexto);
    const [buyer,setBuyer] = useState([])
    const [ventaId,setventaId] = useState("")
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const finalizarCompra=()=>{
        //aca borro "lol" y se convierte en null
        localStorage.removeItem("lol");
        if(Object.values(buyer).length === 5){
            setError(false)
            const ventasUsuario = collection(db,"ventas");
                addDoc(ventasUsuario,{
                    items : productos,
                    usuario:usuarioLogeado,
                    buyer,
                    date:serverTimestamp(),
                    total:calcularTotal(),
                })
                .then(result=>{
                    setventaId(result.id);
                    Swal.fire(
                        "Su compra fue un exito",`Su ticket ${result.id}`,"success"
                    )})
                    clear()
                    
                .catch((error) =>{
                    Swal.fire(
                        "Ocurrio un error Inesperado",`${error.message}`,"error"
                    )
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
        <div id="datosCompra">
            {loginUser?<div>
            {!ventaId ?<div id="buy">
                <h3>Dirección</h3>
            <input type="text" placeholder="Dirección" name="dirección" onChange={datosUser}/>
            <h3>Numero de Casa</h3>
            <input type="text" placeholder="Numero de casa" name="Direccion-numero" onChange={datosUser}/>
            <h3>Targeta de credito</h3>
            <input type="number" placeholder="XXXX-XXXX-XXXX-XXXX" name="Numero Targeta" onChange={datosUser}/>
            <h3>PIN</h3>
            <input type="number" placeholder="XXX" name="codigo" onChange={datosUser}/>
            <h3>Fecha de vencimiento </h3>
            <input type="date"  name="Fecha Vencimiento" onChange={datosUser}/>
            
            <button id="confirmarCompra" onClick={finalizarCompra}>Confirmar Compra</button>

            {error && <p style={{color:'red'}}>Todos los campos son requeridos</p>}
            </div>
            :   
            <div id="ticket">
                <h3>¡Muchas gracias por tu compra!</h3>
                <h3>Tu orden : {ventaId}</h3>
                <button id="confirmarCompra" onClick={()=>navigate('/')}>Volver</button>
            </div>
        }
        </div>:<p>Por favor <Link to="/login">inicie seccion</Link> para continuar,</p>}
        </div>
        
    )
}

export default BuyDate
            
        
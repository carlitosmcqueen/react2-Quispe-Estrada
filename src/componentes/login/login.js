import React,{useState,useEffect,useContext} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut}
 from 'firebase/auth';
import {auth} from '../../firebase/firebase';
import Swal from "sweetalert2";
import {contexto} from "../Context/CartContext";
import "./login.css"

const Login=()=>{
    const [registerEmail,setRegisterEmail] = useState("")
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const {logeado,mostrarLogin} =useContext(contexto)
    const [iniciado,setIniciado] = useState(true)

    const register = async ()=>{
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        }catch(error){
            Swal.fire(
                "Error Registrar Usuario",`error:${error}, intente nuevamente`,"error"
            )
        }
    }
    const login = async ()=>{
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,    
            )
            logeado(user.user.email)
            mostrarLogin(true)
            setIniciado(false)
        }catch(error){

            Swal.fire(
                "Error Iniciar Seccion",`erro:${error}, intente nuevamente`,"error"
            )
        }
    }
    const logout = async()=>{
        await signOut(auth)
        setIniciado(true)
        mostrarLogin(false)

    }
    return(
        <div id="inicioSeccion">
            <div id="inicioSeccionCaja">
            <div className="inicioSeccionInput">
                <h3>Registrar usuario</h3>
                <input className="inputLogin" value={registerEmail} placeholder='Email...' onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input className="inputLogin" type="password" value={registerPassword} placeholder='Password...(Min 6 caracteres)' onChange={(e) => setRegisterPassword(e.target.value)}/>
                <button className="boton" onClick={register}>Crear usuario</button>
            </div>
            <div className="inicioSeccionInput">
                {iniciado?<><h3>Iniciar Seccion</h3>
                <input className="inputLogin" value={loginEmail} placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)}/>
                <input className="inputLogin" type="password" value={loginPassword} placeholder='Password...' onChange={(e) => setLoginPassword(e.target.value)}/>
                <button className="boton" onClick={login}>Iniciar seccion</button></>:<h3>Se inicio seccion correctamente</h3>}
            </div>
            <div className="inicioSeccionUsuario">
                {!iniciado&&<button className="botonLogout" onClick={logout}>Cerrar seccion</button>}
                
            </div>       
            </div>
        </div>
       
        
    )
}
export default Login
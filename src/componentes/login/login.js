import React,{useState,useEffect} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut}
 from 'firebase/auth';
import {auth} from '../../firebase/firebase';
import "./login.css"

const Login=()=>{
    const [registerEmail,setRegisterEmail] = useState("")
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const [user,setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    const register = async ()=>{
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user)
        }catch(error){
            console.error(error.message)
        }
    }

    const login = async ()=>{
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
        }catch(error){
            console.error(error.message)
        }

    }
    const logout = async()=>{
        await signOut(auth)
    }
    return(
        <div id="inicioSeccion">
            <div id="inicioSeccionCaja">
            <div className="inicioSeccionInput">
                <h3>Registrar usuario</h3>
                <input value={registerEmail} placeholder='Email...' onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input type="password" value={registerPassword} placeholder='Password...' onChange={(e) => setRegisterPassword(e.target.value)}/>
                <button className="boton" onClick={register}>Crear usuario</button>
            </div>
            <div className="inicioSeccionInput">
                <h3>Iniciar Seccion</h3>
                <input value={loginEmail} placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)}/>
                <input type="password" value={loginPassword} placeholder='Password...' onChange={(e) => setLoginPassword(e.target.value)}/>
                
                <button className="boton" onClick={login}>Iniciar seccion</button>
            </div>
            <div className="inicioSeccionUsuario">
                <h4>Usuario:</h4>
                <h4>{user?.email}</h4>
                <button className="boton" onClick={logout}>Cerrar seccion</button>
            </div>
            
            </div>
        </div>
       
        
    )
}
export default Login
import React,{useContext} from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import {contexto} from "../Context/CartContext";

function Header() {
    const {usuarioLogeado,loginUser} =useContext(contexto)
    return (
        <header className="barra">
            <div className="imgtit">
                <img className="imagen" src="https://i.postimg.cc/zXBVfkJX/tienda.png" alt="logo"></img>
            </div>
            <div className="icon">
                {loginUser?<Link to="/login"><h3>Bienvenido: {usuarioLogeado}</h3></Link>:<Link to="/login"><h3>Iniciar Seccion/Crear Usuario</h3></Link>}
            </div>
        </header>
    );
};
export default Header;


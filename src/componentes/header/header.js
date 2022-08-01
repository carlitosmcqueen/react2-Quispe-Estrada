import React,{useContext} from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import {contexto} from "../Context/CartContext";

function Header() {
    const {usuarioLogeado,loginUser} =useContext(contexto)



    return (
        <header className="barra">
            <div className="imgtit">
                <img className="imagen" src="https://png.pngtree.com/png-vector/20201221/ourlarge/pngtree-clothing-store-logo-png-image_2586576.jpg" alt="logo"></img>
                <h1 className="titulo">Mercado <br/>Coder</h1>
            </div>
            
            <div className="icon">
                {loginUser?<Link to="/login"><h2>Bienvenido: {usuarioLogeado}</h2></Link>:<Link to="/login"><h2>IniciarSeccion/Crear Usuario</h2></Link>}
            </div>
        </header>
    );
};
export default Header;


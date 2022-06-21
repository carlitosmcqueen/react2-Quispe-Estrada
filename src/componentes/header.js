import React from 'react';
import logo from '../imagenes/logo.png';
import "./header.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Header(props) {
    return (

        <header class="barra">
            <div class="imgtit">
                <img class="imagen" src={logo} alt="logo"></img>
                <h1 class="titulo">Pagina <br/>de <br/>Internet Generica</h1>
            </div>
            
            <div class="icon">
                <div class="iconos">
                    <FacebookIcon/>
                    <TwitterIcon/>
                </div>
            </div>
            
        </header>
    );
};
export default Header;


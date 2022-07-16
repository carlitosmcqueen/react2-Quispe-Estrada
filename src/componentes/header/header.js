import React from 'react';
import logo from '../../imagenes/logo.png';
import "./header.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Header(props) {
    return (

        <header className="barra">
            <div className="imgtit">
                <img className="imagen" src={logo} alt="logo"></img>
                <h1 className="titulo">Mercado <br/>Coder</h1>
            </div>
            
            <div className="icon">
                <div className="iconos">
                    <FacebookIcon/>
                    <TwitterIcon/>
                </div>
            </div>
            
        </header>
    );
};
export default Header;


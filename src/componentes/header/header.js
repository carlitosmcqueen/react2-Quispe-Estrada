import React from 'react';
import "./header.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Header(props) {
    return (
        <header className="barra">
            <div className="imgtit">
                <img className="imagen" src="https://png.pngtree.com/png-vector/20201221/ourlarge/pngtree-clothing-store-logo-png-image_2586576.jpg" alt="logo"></img>
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


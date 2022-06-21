import React from 'react';
import CartWidget from './cartWidget';
import "./nav.css";

function Nav(){
    return(
        
        <nav id="caja">
            <ul id="barra">
                <li class="cajitar"><a href="/">home</a></li>
                <li class="cajitar"><a href="/">info</a></li>
                <li class="cajitar"><a href="/">contacto</a></li>
                <li class="cajitar"><a href="/">extra</a></li>
                <li class="cajacarrito"><a href="/"><CartWidget/></a></li>
            </ul>
        </nav>
    );
};
export default Nav;

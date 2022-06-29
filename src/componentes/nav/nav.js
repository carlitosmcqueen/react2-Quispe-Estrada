import React from 'react';
import CartWidget from '../cartWidget';
import "./nav.css";

function Nav(){
    return(
        
        <nav id="caja">
            <ul id="barra">
                <li class="cajitar"><a href="/">HOME</a></li>
                <li class="cajitar"><a href="/">INFO</a></li>
                <li class="cajitar"><a href="/">CONTACTO</a></li>
                <li class="cajitar"><a href="/">EXTRA</a></li>
                <li class="cajacarrito"><a href="/"><CartWidget/></a></li>
            </ul>
        </nav>
    );
};
export default Nav;

import React from 'react';

import "./nav.css";

function Nav(){
    return(

        <nav id="caja">
            <ul id="barra">
                <li class="cajitar"><a href="#">home</a></li>
                <li class="cajitar"><a href="#">info</a></li>
                <li class="cajitar"><a href="#">contacto</a></li>
                <li class="cajitar"><a href="#">extra</a></li>
            </ul>
        </nav>
    );
};
export default Nav;

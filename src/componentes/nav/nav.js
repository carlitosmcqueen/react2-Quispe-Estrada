import React from 'react';
import CartWidget from '../cartWidget';
import "./nav.css";
import { Link,NavLink} from 'react-router-dom';

function Nav(){

    const LinkNav=[
        {name: 'Tienda', id:0,path:'/'},
        {name: 'Remeras', id:1,path: '/category/remeras'},
        {name: 'Camisas', id:2,path: '/category/camisas'},
        {name:"Gorras", id:3,path: '/category/gorras'}

    ];
    
    return(
        <div id="contenedorLink">

            <nav id="nav">
                {LinkNav.map((LinkNav) =>(<NavLink id="linkNav" key={LinkNav.id} to={LinkNav.path}>{LinkNav.name}</NavLink>))}
            </nav>
            <div id="linkCartWidget">
                <Link  to="/cart"><CartWidget /></Link>
            </div>
           

        </div>
    );
};
export default Nav;


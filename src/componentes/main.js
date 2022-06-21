import React from 'react';

//CLASE 3 crear props y const

//componente presentacional
const Main =({name,app,saludo,children}) => {
    //console.log("main props --->",{name,app});

    // lo llamo desde el hijo y los muestra el padre
    return(
        <>
        {children}
        <h4>{name}</h4>
        <h3>Mi app es {app}</h3>
        <button onClick={saludo}>CLICK PARA SALUDAR</button>

        </>
    );
};
export default Main;
import React from 'react';
import logo from '../imagenes/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Header() {
    return (
        <header style={styles.barra}>
            <img style={styles.imagen} src={logo} alt="logo"></img>
            <h1>Pagina <br/>de <br/>Internet Generica</h1>
            <div style={styles.iconos}>
            <FacebookIcon/>
            <TwitterIcon/>
            </div>
        </header>
    );
};
export default Header;

const styles = {
    barra:{
        display: 'flex',
        alignItems: 'center',
        background: "rgb(106,187,245)",
        background: "linear-gradient(277deg, rgba(106,187,245,1) 35%, rgba(144,6,255,1) 86%)",
    },
    imagen:{
        width: '10%',
        paddingRight: '2%',
    },
    iconos:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: "70vw",
        marginTop: "15vh",
    }
}

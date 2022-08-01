import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./footer.css"

const Footer=()=>{
    return (
        <div className="foot">
            <div className="icon">
                <h3>Mercado Coder</h3>
                
            </div>
            <div className="iconos">
                    <a title="facebook" href="https://www.facebook.com/"><FacebookIcon/></a>
                    <a title="twitter" href="https://twitter.com/"><TwitterIcon/></a>
            </div>
        </div>
        
    )
}
export default Footer
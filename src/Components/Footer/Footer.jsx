import React from 'react';
import './Footer.css';
import Footerlogo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer=()=>{
    return(
    <div className='Footer'>
        <div className='Footer-logo'>
     <img src={Footerlogo}/>
     <p>SHOPEE</p>
        </div>

        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    <div className='Footer-icons'>
         <div className='each-footer-icon'>
            <img src={insta}/>
         </div>

         <div className='each-footer-icon'>
            <img src={pintrest}/>
         </div>

         <div className='each-footer-icon'>
            <img src={whatsapp}/>
         </div>

    </div>



   <div className="Footer-Copyright">
      <hr/>
    <p>PRIVACY|TERMS|LEGAL</p>
   </div>
    </div>
    )
}
export default Footer;
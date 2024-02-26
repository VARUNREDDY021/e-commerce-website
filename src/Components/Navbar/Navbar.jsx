import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext';

const Navbar =()=>{
    
    const [menu,setMenu]=useState("");
    const [change,setChange]=useState(true);
    const{navbarCount}= useContext(ShopContext);

    const handleChange=()=>{
      setChange(!change);
    }
    
    return(
        <div className='navbar'>

     <div className="nav-logo">
        <img src={logo}/>
        <p>SHOPEE</p>
     </div>

     <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link  style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu === "Shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link   style={{textDecoration:'none'}} to='/men'>MEN</Link> {menu === "Men" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link  style={{textDecoration:'none'}} to='/women'>WOMEN</Link> {menu === "Women" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none'}} to='/kids'>KIDS</Link> {menu === "Kids" ? <hr/> : <></>}</li>
     </ul>


     <div className="nav-login-cart">
       <Link to='/login'> <button onClick={handleChange}>{change?"LOGIN":"LOGOUT"}</button></Link>


       
       <Link to='/cart'> <img src={cart_icon}/></Link>
        <div className="nav-cart-counter">{navbarCount()}</div>
     </div>


        </div>
    )
}
export default Navbar;
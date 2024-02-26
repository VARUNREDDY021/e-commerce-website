import React from 'react';
import './Breadcrum.css';
import arrowicon from '../Assets/breadcrum_arrow.png';

const Breadcrum=(props)=>{
    const {product}= props;
    return(
    <div className='Breadcrum'>
       <p>HOME <img src ={arrowicon}/> SHOP <img src={arrowicon}/> {product.category} <img src={arrowicon}/> {product.name}</p>
    </div>
    )
}
export default Breadcrum;
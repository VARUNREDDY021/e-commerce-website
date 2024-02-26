import './Offers.css'
import React from 'react';
import exclusive from '../Assets/exclusive_image.png'

const Offers=()=>{
    return(
        <div className='Offers'>
           <div className="Offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
           </div>
           <div className="Offers-right">
            <img src={exclusive}/>
           </div>
        </div>
    )
}
export default Offers;
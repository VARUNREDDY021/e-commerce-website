import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom'


const Item=(props)=>{
return(
    <div className='main'>
       <div><Link to={`/product/${props.id}`}><img src={props.image}/></Link></div>
     <p>  {props.name}</p>

       <div className='prices'>
        
        <div className="new-price">
        ${props.new_price}
        </div>


        <div className="old-price">
        ${props.old_price}
        </div>

        </div>

    
    </div>
)
}
export default Item;
import React from 'react';
import './Popular.css'
import Item from '../Item/item'
import  data from '../Assets/data'

const Popular=()=>{
    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
     <div className="data">

       { data.map((e)=>{
           return   <Item id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
        })}
     </div>
        
        </div>
    )
}
export default Popular;
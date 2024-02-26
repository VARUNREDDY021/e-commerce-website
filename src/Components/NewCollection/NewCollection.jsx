import React from 'react';
import './NewCollection.css'
import NewData from '../Assets/new_collections'
import Item from '../Item/item';

const NewCollection=()=>{
    return(
        <div className='newCollection'>
            <h1>NEW COLLECTION</h1>
            <hr/>
            <div className='NewCollectionData'>
          {NewData.map((e)=>{
           return <Item   id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
          })}
            </div>

        </div>
    )
}
export default NewCollection
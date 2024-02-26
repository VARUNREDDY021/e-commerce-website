import React,{useContext} from 'react';
import Item from '../Components/Item/item';
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'

const ShopCategory = (props)=>{

    const {all_product} = useContext(ShopContext);
    console.log(all_product);

    return(
        <div className='shopcategory'>
            <div className='banner'> 
            
        <img src={props.banner}/>
            </div>
        <div className='Shopcategory-products'>
            {all_product.map((e)=>{
        if(props.Category === e.category){
            return             <Item id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price}/>
        }
        else{
            return null;
        }
                
                })}

        </div>
        </div>
    )
}
export default ShopCategory;
import React,{useContext} from 'react';
import './ProductDisplay.css'
import brightstar from '../Assets/star_icon.png'
import dullstar from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay =(props)=>{

    const {product} = props;
    const{Addtocart}=useContext(ShopContext);

    return(
        <div className='ProductDisplay-main'>
          <div className="Product-left">
             <img src={product.image}/>
          </div>
        <div className="Product-right">
            <div className="ProductDisplay-main-name">{product.name}</div>
            <div className="ProductDisplay-rating">
                <img src={brightstar}/>
                <img src={brightstar}/>
                <img src={brightstar}/>
                <img src={brightstar}/>
                <img src={dullstar}/>
            </div>

           <div className='ProductDisplay-prices'>
               <div className="ProductDisplay-newprice">${product.new_price}</div>
               <div className="ProductDisplay-oldprice">${product.old_price}</div>
           </div>
           <div className="ProductDisplay-description">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ipsa quos expedita tenetur libero. Voluptas eos amet sequi ipsam voluptatem aliquam saepe neque quo, rem dicta officia facilis. Similique, consequatur?
           </div>
           <div className="ProductDisplay-Size">
               <h3>Select Size:</h3>
               <div className='allsizes'>

                 
                  <li>S</li>
                   <li>M</li>
                    <li>L</li>
                     <li>XL</li>
                      <li>XXL</li>
             
               </div>
           </div>
           <div className='ProductDisplay-button'>
             <button onClick={()=>{Addtocart(product.id)}}>ADD TO CART</button>
           </div>

        </div>

        </div>
    )

}
export default ProductDisplay;
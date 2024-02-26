import React,{useContext} from "react";
import './CartItems.css';
import removeicon from '../Assets/cart_cross_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const CartItems=()=>{
    const{getTotalCartAmount,all_product,cartItems,Removefromcart}=useContext(ShopContext);
    return(
        <div className="Cartitems">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr/>
          {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
            return <div className="cartitems-format cartitems-format-main">
                 <img src={e.image} className="cartitems-product-icon"/>
                 <p>{e.name}</p>
                 <p>{e.new_price}</p>
                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
                 <p>${e.new_price * cartItems[e.id]}</p>
                 <img className='cartitems-remove-icon'src={removeicon} onClick={()=>{Removefromcart(e.id)}}/>
                </div>
            }
            return null;
          })}
          <div className="cartitems-down"> 
          <div className="cartitems-total">
            <h1>cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>Enter Promo Code Here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"/>
                <button>SUBMIT</button>
            </div>
          </div>
          </div>

        </div>
    )
}
export default CartItems;
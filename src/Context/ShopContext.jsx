import React,{useState} from 'react';

import all_product from '../Components/Assets/all_product';

const Defaultcart=()=>{
         
        let cart= {};
    for(let i=0;i<all_product.length;i++){
         
      cart[i]=0;
    }
   return cart;
}

export const ShopContext = React.createContext();

const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(Defaultcart());

    const Addtocart=(itemid)=>{
        const updatedcart = {...cartItems};
        updatedcart[itemid]=updatedcart[itemid]+1;
        setCartItems(updatedcart)
        
    }
    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const navbarCount=()=>{
        let totalItems=0;
        for(const item in cartItems){
        if(cartItems[item]>0){
            totalItems+=cartItems[item]
        }
    }
        return totalItems;
    }

    const Removefromcart=(itemid)=>{
        const updatedcart={...cartItems};
        if(updatedcart[itemid]>0){
        updatedcart[itemid]=updatedcart[itemid]-1;
        setCartItems(updatedcart)
    }
    }


    const ContextValue = {navbarCount,getTotalCartAmount,all_product,cartItems,Addtocart,Removefromcart}
    
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
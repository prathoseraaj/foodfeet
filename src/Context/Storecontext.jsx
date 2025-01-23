import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartitems, setCartitems] = useState({});
    const addtocart = (itemId) =>{
        if(!cartitems[itemId]){
            setCartitems((prev)=>({...prev,itemId:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
        }
    }
    const removefromcart = (itemId) => {
        setCartitems((prev) => ({...prev,[itemId]:[itemId]-1}))
    }

    const contextvalue = {
        food_list,
        cartitems,
        setCartitems,
        addtocart,
        removefromcart,
    }
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
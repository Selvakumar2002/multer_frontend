import React  from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Comp/Cart";
import Product from "./Product";
import Sixpage from "../Component/Sixpage/Sixpage";
import Fourthpage from "../Component/Fourthpage/Fourthpage";
import About from "../Component/Eall/About";
import Offer from "../Component/Eall/Offer";
// import SingUpForm from "../Sign-form/SignUpForm";
function Rout12({addtocart,cartItem,setcartItem}) {
    return(
        <>
        <Routes>
            <Route path='/about' element={<Sixpage />}  />
            <Route path='/class' element={<Fourthpage />}  />
            <Route path='/pricing' element={<Product addtocart={addtocart}/>}  />
            <Route path='/cart' element={<Cart  addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem} />}  />
            <Route  path='/about12' element={<About/>}  />
            <Route  path='/offer' element={<Offer/>}  />
            {/* <Route  path='/signup' element={<SingUpForm/>}  /> */}
        </Routes>
        </>
    )
    
}
export default Rout12;

import React,{ useContext } from "react"
import { MyContext } from "../MyContext/MyProvider"
import {  FaHeart } from 'react-icons/fa';
import '../Styles/Favorite.css'


function Favorite() {
  const {favList,item,}  = useContext(MyContext)

  const handelClick =(id) =>{

  }

  return (
   <div>
      {favList.map(item=><div className="fav-box">
           <div className="fav-img">
           <img src={item.img} alt={item.title} />
           </div>
           <div className="fav-des">
           <h4>{item.title}</h4>
           <h5>{item.Rate}</h5>
           </div>
           <div className="fav-cart">
            <button className="btn btn-primary" onClick={()=>handelClick(item.id)}>Add to Cart</button>
           </div>
           <div className="remove-icon">
           <FaHeart className="remove-fav" size={20}  />
           </div>
      </div>

    )}
  </div>
  )
}

export default Favorite
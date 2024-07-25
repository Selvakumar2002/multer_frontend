import React,{useState} from 'react'
import Navbar from './Navbar'
import Addtocart from './Addtocart'
import Favorite from './Favorite'
import '../Styles/Cart.css'

function Cart() {
  const [activeTab, setActiveTab] = useState('addtocart');
  return (
    <div className='cart-main'>
      <Navbar/>
        <div className="container Cart-box   rounded-3">
   <div>  
          <h1 className="cart-heading text-start ms-5">Your Cart</h1>
          <div className='Cart-section'>
                <div className="cart-tabs ">
                 <button onClick={() => setActiveTab('addtocart')} >Order</button>
                  <button onClick={() => setActiveTab('favorite')}>Favorite</button>
                </div>
          </div>
     
         {/* Render OrderComponent if activeTab is 'order', otherwise render FavoriteComponent */}
         {activeTab === 'addtocart' ? <Addtocart /> : <Favorite />}
    </div>
        </div>
    </div>
  )
}

export default Cart


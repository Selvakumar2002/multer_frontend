import React from 'react'
import '../Styles/Home.css'
import Cakeism from '../Images/cakeismlogo.png'
import Cake from '../Images/cake.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
            <div className='container-fluid main-box' >
            <div className="content-box">
                <div className='cmpy-name'> <img src={Cakeism} alt="" className='cakeism-img'/></div>
                <div className='logo-img'> <img src={Cake} alt=""  className='cake-img' /></div>
                <div className='order-btn'>
                    <Link to={'/Order'} className='Order-btn'>Order Now</Link>
        </div>
                </div>
            </div>
    </div>
  )
}

export default Home

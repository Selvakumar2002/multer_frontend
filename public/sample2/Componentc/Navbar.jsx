import React ,{useContext}from 'react'
import { Link } from 'react-router-dom'
import { BsCake2 } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { SiVorondesign } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";
import { MyContext } from '../MyContext/MyProvider';

function Navbar() {
  const {item} = useContext(MyContext)
  
  return (
    <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid pt-0 pb-0 p-5">
        <span className="navbar-brand ">
          <i className="fas fa-bars"></i> 
          <Link to={'/'} className='nav-link'>Home</Link>
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to={"/Order"}> 
              <BsCake2 /> Order Page</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About"><SiVorondesign /> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to={"/Cart"}>
                <FiShoppingCart  /> Cart {item.length === 0 ? '': item.length} </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}> <VscAccount /> Account</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar

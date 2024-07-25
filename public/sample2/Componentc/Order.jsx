import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import listItem from '../Items/Item';
import '../Styles/Order.css';
import { MyContext } from '../MyContext/MyProvider';
import CakecutGif from '../Images/cakecutgif.gif';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function Order() {
  const [cartItems, setCartItems] = useState(listItem);
  const { setItem, count, setCount ,favList,setFavList} = useContext(MyContext);


  const handleChange = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].status = true;
    setCartItems(updatedCartItems);
    const selectedItems = updatedCartItems.filter((item) => item.status === true);
    setItem(selectedItems);
    setCount(count + 1);
  };

  const addFav = (id) => {
    const itemToAdd = cartItems.find((item) => item.id === id);
    if (!favList.find((item) => item.id === id)) {
      setFavList([...favList, itemToAdd]);
    } else {
      removeFav(id);
    }
  };

  const removeFav = (id) => {
    const updatedFavList = favList.filter((item) => item.id !== id);
    setFavList(updatedFavList);
  };

  return (
    <div className="order" style={{ boxSizing: 'border-box' }}>
      <Navbar />
      <div className="container p-5">
        <img src={CakecutGif} alt="" className="cakecut-img" />
      </div>
      <div className="item-list container">
        <div className="row w-100 ">
          {cartItems.map((item, index) => (
            <div className="col-xl-3 col-md-6 col-sm-12 p-2" key={index}>
              <div className="card  p-1  ">
                <div>{item.title}</div>
                <img src={item.img} alt="lpo" style={{ width: '100%' }} />
                {favList.find((favItem) => favItem.id === item.id) ? (
                  <FaHeart className="fav-icon" size={20} onClick={() => removeFav(item.id)} />
                ) : (
                  <FaRegHeart className="fav-icon" size={20} onClick={() => addFav(item.id)} />
                )}
                <div className="card-body">
                  <div>$ {item.Rate}</div>
                  {item.status === false ? (
                    <span className="btn btn-primary" onClick={() => handleChange(index)}>
                      Add to Cart
                    </span>
                  ) : (
                    <span>Added</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;

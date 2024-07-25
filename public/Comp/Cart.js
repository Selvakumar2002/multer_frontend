import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
   
    function inc(product) {
        const exist = cartItem.find((x) => x.id === product.id);
        setcartItem(
            cartItem.map((item) =>
                item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
            )
        );
        // Update local storage
    }

    function dec(product) {
        const exist = cartItem.find((x) => x.id === product.id);
        setcartItem(
            cartItem.map((item) =>
                item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item
            )
        );
        // Update local storage
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }

    const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.Price, 0);

    function removecart(product) {
        const exist = cartItem.find((x) => x.id === product.id);
        if (exist.quantity > 0) {
            setcartItem(cartItem.filter((x) => x.id !== product.id));
        }
        // Update local storage
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }

    return (
        <>
            {cartItem.length === 0 && (
                <>
                    <h2 className="empty_cart">Cart Is Empty please Select a Product</h2>
                    <Link to="/pricing">
                        <button className="cart_shop">Shopping</button>
                    </Link>
                </>
            )}
            <div>
            <div className="cart_container">
                <div className="cart_product">
                    {cartItem.map((item) => (
                        <div className="cart_box" key={item.id}>
                            <div className="cart_pproduct_container">
                                <div className="cart_img_box">
                                    <img id='plplpl' src={item.Img} alt={item.Title}></img>
                                </div>
                                <div className="cart_item_detail">
                                    <h2>{item.Title}</h2>
                                    <h3>Price: ${item.Price}</h3>
                                    <button className="quantity_dec" onClick={() => dec(item)}>
                                        -
                                    </button>
                                    <input id="in" type="text" value={item.quantity}></input>
                                    <button className="quantity_inc" onClick={() => inc(item)}>
                                        +
                                    </button>
                                    <h3> Sub Total: ${item.Price * item.quantity}</h3>
                                </div>
                                <button className="remove_cart" onClick={() => removecart(item)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                    {cartItem.length > 0 && (
                        <>
                           <div id="ceh">
                           <button className="checkout">CheckOut</button>
                            <p>Total: ${TotalPrice}</p>
                           </div>
                        </>
                    )}
                           </div>
                           </div>
             
            </div>
        </>
    );
}

export default Cart;

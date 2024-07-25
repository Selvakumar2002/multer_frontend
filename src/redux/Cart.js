import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { incrementQuantity, decrementQuantity } from './actionType'; // Import action creators

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    fetch(`http://localhost:5000/api/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })
    .then(response => {
      if (response.ok) {
        console.log('Checkout successful');
        alert("Checkout Successful");
        dispatch({ type: 'CLEAR_CART' });
      } else {
        console.error('Checkout failed');
        alert("Checkout Failed");
      }
    })
    .catch(error => {
      console.error('Network error:', error);
    });
  };

  const handleIncrement = (index) => {
    dispatch(incrementQuantity(cartItems[index].id)); // Dispatch action to increment quantity
  };

  const handleDecrement = (index) => {
    dispatch(decrementQuantity(cartItems[index].id)); // Dispatch action to decrement quantity
  };

  const handleCancel = (id) => {
    // Dispatch action to remove the item from the cart
    dispatch({ type: 'CANCEL_ITEM', payload: id });
  };
  
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.Price * item.Quantity), 0);

  return (
    <Container>
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Please add some items.</p>
        ) : (
          <div className='div-cart'>
            {cartItems.map((item, index) => (
              <div key={index} >
                <Card style={{ width: '18rem' }} className='Product-Card'>
                  <Card.Img variant="top" src={item.Img} className='Product-img'/>
                  <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>
                      {item.Cate}
                      <h6>${item.Price}/-</h6>
                      <div>
                        <Button onClick={() => handleDecrement(index)}>-</Button>
                        {item.Quantity}
                        <Button onClick={() => handleIncrement(index)}>+</Button>
                        <Button onClick={() => handleCancel(item.id)}>Cancel</Button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
      <Button onClick={handleCheckout}>Check out</Button>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </Container>
  );
};

export default Cart;

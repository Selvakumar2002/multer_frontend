import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Tabled = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/get');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((cartItems, index) => (
            <tr key={index}>
              <td>{cartItems.Title}</td>
              <td>{cartItems.Cate}</td>
              <td>${cartItems.Price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabled;

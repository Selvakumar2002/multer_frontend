import React, { useState } from 'react';
import Detail from "./Productdetail";
import { Container, Form, Button, Image } from 'react-bootstrap';

function AdminPanel() {
  const [product, setProduct] = useState({
    id: '',
    Title: '',
    Price: '',
    Img: null,
    ImgPath: '', 
    Cate: ''
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'Img') {
      const selectedFile = files[0];

      if (selectedFile && selectedFile.type && selectedFile.type.startsWith('image/')) {
        setProduct(prevState => ({
          ...prevState,
          Img: selectedFile, 
            ImgPath: URL.createObjectURL(selectedFile) 
          }));
      } else {
 
        setProduct(prevState => ({
          ...prevState,
          Img: null,
          ImgPath: ''
        }));
        alert('Please select a valid image file.');
      }
    } else {
      setProduct(prevState => ({
        ...prevState,
        [name]: value 
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!product.Img) {
      alert('Please select an image file.');
      return;
    }
    const newProduct = { ...product, id: Detail.length + 1 };
    Detail.push(newProduct);
    console.log(Detail); 
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="Title" value={product.Title} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="Price" value={product.Price} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="img">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="Img" onChange={handleChange} />
          {product.ImgPath && <Image src={product.ImgPath} alt="Product Image" style={{ marginTop: '10px', width: '200px', height: '200px' }} />}
        </Form.Group>
        <Form.Group controlId="cate">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="Cate" value={product.Cate} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Product</Button>
      </Form>
    </Container>
  );
}

export default AdminPanel;

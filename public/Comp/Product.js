// Product.js
import React from "react";
import Detail from "./Productdetail";
import { Container } from "react-bootstrap";
import "./Product.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Product({ addtocart }) {
  const handleAddToCart = (curElm) => {
    // Add the clicked product to the cart
    addtocart(curElm);
    // Store the clicked product in local storage

  };

  return (
    <Container>
      <div className="addto1">
        {Detail.map((curElm) => {
          return (
            <div key={curElm.id} className="box">
            <Row><Col>

              <div className="img-box">
                <img className="imgcur" src={curElm.Img} alt="Product"></img>
              </div>
              <div className="detail">
              <h4 className="addto3">{curElm.Title}</h4>
                <p className="addto2">{curElm.Cate}</p>
               
                <p className="addto4">${curElm.Price}</p>
                <button className="addtocart" onClick={() => handleAddToCart(curElm)}>
                  Add to Cart
                </button>
              </div>
            </Col></Row>

            </div>

          );
        })}
      </div>
    </Container>
  );
}

export default Product;

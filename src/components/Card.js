import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import nodeImage from '../assets/images/products/node.png'
import { useCart } from "react-use-cart";

function BasicCard({ product }) {
  
  const { addItem } = useCart();
  const { image, title, description, price } = product;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title className="text-end">{price} DTN</Card.Title>
        <Button variant="warning" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;

import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    mainImageUrl: 'path/to/your/main-image.jpg',
    angleImageUrls: [
      'path/to/angle-image1.jpg',
      'path/to/angle-image2.jpg',
      'path/to/angle-image3.jpg',
    ],
    name: 'Automation & Monitoring system for Mushroom Cultivation',
    author: 'Farm Link',
    price: 29.99,
    description: 'Achieve ideal results effortlessly through remote monitoring, control, and adjustments in cultivation.',
  };

  const handleAddToCart = () => {
    // Add your logic here for adding the product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <>
    <Navbar/>
    <CenteredContainer>
      <ProductContainer>
        <ImageContainer>
          <MainImageContainer>
            <MainImage src={product.mainImageUrl} alt="Product Main" />
          </MainImageContainer>
          <AngleImages>
            {product.angleImageUrls.map((imageUrl, index) => (
              <AngleImage key={index} src={imageUrl} alt={`Angle ${index + 1}`} />
            ))}
          </AngleImages>
        </ImageContainer>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductAuthor>by {product.author}</ProductAuthor>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <QuantityContainer>
            <QuantityLabel>Quantity:</QuantityLabel>
            <QuantityInput
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </QuantityContainer>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ProductDetails>
      </ProductContainer>
    </CenteredContainer>
    </>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProductContainer = styled.div`
  display: flex;
  margin: 0 20px; /* Add some horizontal spacing */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px;
`;

const MainImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  width: 400px;
  height: 300px;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`;

const AngleImages = styled.div`
  display: flex;
  align-items: center;
`;

const AngleImage = styled.img`
  width: 80px;
  height: auto;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px; /* Add some horizontal spacing */
`;

const ProductName = styled.h1`
  font-size: 24px;
  margin: 0 0 8px;
  word-wrap: break-word; /* Added to break long titles */
  white-space: pre-wrap;
`;

const ProductAuthor = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 12px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #b12704;
  margin: 0 0 16px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 0 20px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 24px;
`;

const QuantityLabel = styled.label`
  font-size: 16px;
  color: #555;
  margin: 0 12px 0 0;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddToCartButton = styled.button`
  background-color: #1565C0;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: #1564A0;
    color: #ffffff;
  }
`;

export default ProductPage;

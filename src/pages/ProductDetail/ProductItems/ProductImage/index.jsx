import React from 'react';
import { Carousel, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { baseUrl } from '../../../../constants';

const ProductImage = ({ images }) => {
  let carouselRef = React.createRef();

  return (
    <Col sm={24} lg={10}>
      <div className="carousel-container">
        <Button 
          className="carousel-nav-button prev-button" 
          icon={<LeftOutlined />} 
          onClick={() => carouselRef.current.prev()}
        />
        <Carousel
          ref={carouselRef}
          arrows={false}
          infinite={false}
          className="product-carousel"
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                alt={`Product image ${index + 1}`}
                src={`${baseUrl}${img}`}
                className="main-image"
              />
            </div>
          ))}
        </Carousel>
        <Button 
          className="carousel-nav-button next-button" 
          icon={<RightOutlined />} 
          onClick={() => carouselRef.current.next()}
        />
      </div>
    </Col>
  );
}

export default ProductImage;

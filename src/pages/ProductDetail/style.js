import styled from "styled-components";

export const ProductWrapper = styled.div`
  .product-info{
  padding-left: 30px;
  }

  .price {
    font-size: 24px;
  }

  .original-price {
    text-decoration: line-through;
    color: grey;
    margin-right: 8px;
  }

  .discounted-price {
    color: #00B96B;
    margin-right: 8px;
  }

  .discount {
    color: red;
  }

  .product-details {
    display: flex;
  }

  .main-image {
    width: 100%;
    display: block;

  }
  /* .product-carousel .slick-slide {
  text-align: center;
}

.product-carousel .slick-slide img {
  max-width: 500px;
  height: auto;
} */
  .carousel-container {
  position: relative;
}

.carousel-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  outline: none;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.product-carousel .main-image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

  .color-selector, .size-selector, .quantity-selector {
    margin: 10px 0;
  }

  .action-buttons {
    display: flex;
    gap: 10px;
  }

  .social-share {
    margin: 20px auto;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 567px){
    .product-info{
      padding-left: 0px;
    }
  }

`
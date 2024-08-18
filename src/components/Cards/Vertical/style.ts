import styled from "styled-components";

export const Vertical = styled.div`
  margin: 1.2rem;
  padding: 0;
  box-shadow: 0 0 15px #e1e1e1;
  position: relative;
  .dark{
    color: white;
    background-color: #000;
    .title{
      color: red!important;
    }
  }


  .image-container img{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-price {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
  }

  .price {
    color: #1890ff;
    font-weight: bold;
  }

  .original-price {
    text-decoration: line-through;
    margin-left: 8px;
    color: #888;
  }

  .discount {
    margin-left: 8px;
    color: #ff4d4f;
  }

  .hidden {
    display: none;
  }
  
  @media (max-width: 992px) and (min-width: 568px) {
    .product-price {
      font-size: 14px;
    }
    .price {
      font-size: 12px !important;
    }
  }

  @media (max-width: 567px) {
    .product-card {
      max-height: 400px;
    }

    .product-card img {
      width: 100%;
      height: 100%;
    }
    .product-price {
      font-size: 10px;
    }
    .price {
      font-size: 12px !important;
    }
  }

`
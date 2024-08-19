import styled from "styled-components";

export const ProductsWrapper = styled.div`
  .hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  }
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .image-container:hover .hover-overlay {
    opacity: 1;
  }
  .product-page{
    display: flex;
  }
  .product-field{
    flex: 6;
  }
  .icon {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
  }


  .product-details {
    margin-top: 10px;
  }

  .product-price {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .original-price {
    text-decoration: line-through;
    color: gray;
  }

  .discount {
    color: red;
  }

  @media (min-width: 568px) and (max-width: 1111px){
    .product-field{
    flex: 5;
  }
  }

`
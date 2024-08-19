import styled from "styled-components";

export const BasketWrapper = styled.div`
  padding: 0 120px;
  margin: 50px 0;
  .title{
    font-size: 2rem;
  }

  .order-summary {
    margin-top: 50px;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

  }
  .coupon-container{
    width: 50%;
    margin-top: 50px;
  }

  @media (max-width: 567px){
    padding: 25px;
    .order-summary {
      margin-top: 10px;
      padding: 10px;
    }
    .coupon-container{
      width: 100%;
    }

  }
`
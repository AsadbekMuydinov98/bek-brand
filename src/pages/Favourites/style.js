import styled from "styled-components";

export const FavouriteWrapper = styled.div`
  margin: 20px 100px;
  .title{
    font-size: 2rem;
  }
  .fav-card{
    box-shadow: 0 0 15px #e1e1e1; 
    margin: 1rem;
  }
  img{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  @media (max-width: 992px) and (min-width: 568px) {
    margin: 1rem;
    .title{
      font-size: 1.5;
    }
    .fav-card{
      margin: 1rem;
    }
  }
  @media (max-width: 567px){
    margin: 2rem;
    .title{
      font-size: 1.5;
    }
    .fav-card{
      margin-top: 3rem;
    }
  }
`
import styled from "styled-components";

export const FavouriteWrapper = styled.div`
  margin: 10px 100px;
  .title{
    font-size: 2rem;
  }
  img{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
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
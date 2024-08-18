import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: 40vh;
  background-image: url('https://wallpapers.com/images/hd/nike-af1-w0tetnmbfs28byu9.jpg');
  background-size: cover;
  background-position: 0px -200px;
  background-repeat: no-repeat;
  padding: 60px;

  h1{
    color: white;
    font-size: 4rem;
  }
  @media (min-width: 568px) and (max-width: 850px){ 
  background-position: 0px;
  h1{
    font-size: 60px;
  }
}

@media (max-width: 567px){  
  background-position: 0px;
  h1{
    color: white;
    font-size: 40px;
  }
}
`
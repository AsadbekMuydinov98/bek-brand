import styled from "styled-components";

export const NavigatorWrapper = styled.header`
  position: sticky;
  top: 90px;
  z-index: 9;

  .hedr{
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'aliceblue' : '#2C3E50'};
  color: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'black' : 'white'};
  height: 50px;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  }
  .nav-search-in{
    font-size: 24px;
    margin-left: 24px;
  }
  .user-store{
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 20px;
    a{
      font-size: 20px;
      margin-right: 10px;
    }
  }
  .active{
    padding: 5px 0;
    display: block;
    border-radius: 5px;
    background-color: white;
    span{
      margin: 0 5px;
    }
  }

  @media (max-width: 992px) and (min-width: 769px){
    top: 5.2rem;
  }
  @media (max-width: 768px) and (min-width: 568px){
    top: 3rem;
  }

  @media (max-width: 567px){
    top: 3rem;
    .hedr{
      display: flex;
      padding: 0 1rem;
      justify-content: space-between;
    }
    .nav-search-in{
      font-size: 14px;
      margin-left: 0px;
    }
    span{
      font-size: 15px;
    }
  }
`
import styled from "styled-components";


export const LapNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'rgba(255, 255, 255, 0.95)' : '#1A2B2F'};
  position: sticky;
  top: 0px;
  z-index: 99;
  .logo{
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    h3{
      margin: 0 0 0 0.5rem;
    }
  }
  #navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  #navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
  }

  #navbar li a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ $themeMode }) => ($themeMode === 'light' ? '#000' : '#FFF')};
    transition: 0.3s ease-in-out;
  }
  .active{
    border-radius: 0.2rem;
    background-color: #EDF5FC;
    padding: 5px 25px!important;
    a{
      color: #40BFFF!important;
    }
    transition: background-color 1s ease;
  }

  #mobile {
    display: none;
  }

  #mobile i {
    color: #000;
    align-items: center;
  }

  @media (max-width: 1200px) and (min-width: 993px) {
    .brandname{
      font-size: 20px!important;
    }
    #navbar li a{
      font-size: 20px;
    }
  }
  @media (max-width: 992px) and (min-width: 770px) {
    .brandname{
      font-size: 20px!important;
    }
    #navbar li a{
      font-size: 15px;
    }
  }

  @media screen and (max-width: 769px) {
    .brandname{
      font-size: 15px!important;
    }
    height: 3rem;
    #navbar {
      display: none;
    }
  }
`;

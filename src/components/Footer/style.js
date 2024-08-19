import styled from "styled-components";

export const Ecomfooter = styled.div`
  .footer{
    padding: 40px 20px;
    padding-left: 5%;
  }
  .light{
    background-color: #e0f7fa;
  }
  .dark{
    background-color: #1A2B2F;
  }

  .footer .ant-typography {
    color: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'black' : 'white'};
  }

  .footer .social-icons {
    margin-top: 10px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-links a {
    color: #006064;
    text-decoration: none;
    color: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'black' : 'white'};

  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  .payment-methods img {
    margin-left: 10px;
    height: 25px;
  }

`
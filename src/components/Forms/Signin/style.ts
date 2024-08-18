import styled from "styled-components";


export const LoginWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 5;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translate(-50%, 0);
    background-color: #fff;
    width: 200%;
    height: 250px;
    border-radius: 50%;
    z-index: 4;
    transition: all 0.3s ease;
  }
  
  .login .center {
    position: absolute;
    top: calc(50% - 10%);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    transition: all 0.3s ease;
  }
  .login .center .form-title {
    color: #000;
    font-size: 1.7em;
    text-align: center;
  }
  .login .center .form-title span {
    color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  .login .center .form-holder {
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid #eee;
    overflow: hidden;
    margin-top: 50px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

  .login .center .submit-btn {
    background-color: #6B92A4;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }
  .login .center .submit-btn:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .login.slide-up {
    top: 90%;
    transition: all 0.3s ease;
  }
  .login.slide-up .center {
    top: 10%;
    transform: translate(-50%, 0%);
    transition: all 0.3s ease;
  }
  .login.slide-up .form-holder, .login.slide-up .submit-btn {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  .login.slide-up .form-title {
    font-size: 1em;
    margin: 0;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .login.slide-up .form-title span {
    margin-right: 5px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

`
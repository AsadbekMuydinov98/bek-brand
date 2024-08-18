import styled from "styled-components";


export const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  transition: all 0.3s ease;
  .slide-up {
    top: 5%;
    transform: translate(-50%, 0%);
    transition: all 0.3s ease;
  }
  .slide-up .form-holder, .signup.slide-up .submit-btn {
    opacity: 0;
    visibility: hidden;
  }
  .slide-up .form-title {
    font-size: 1em;
    cursor: pointer;
  }
  .slide-up .form-title span {
    margin-right: 5px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }
  .form-title {
    color: #fff;
    font-size: 1.7em;
    text-align: center;
  }
  .form-title span {
    color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  .form-holder {
    border-radius: 15px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 50px;
    padding: 5px 50px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

  .submit-btn {
    background-color: rgba(0, 0, 0, 0.4);
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
  .submit-btn:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
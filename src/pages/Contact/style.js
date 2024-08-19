import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 15px;

  .contact-info {
    background-color: #00aaff;
    color: #fff;
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px 0 0 15px;
  }

  .contact-info img.contact-image {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  }

  .contact-info h2 {
    font-size: 2em;
    margin: 10px 0;
  }

  .contact-info p {
    margin: 5px 0;
  }

  .contact-form {
    flex: 1;
    padding: 50px;
  }

  .contact-form .ant-form-item {
    margin-bottom: 15px;
  }

  .contact-form .ant-form-item-control-input {
    display: flex;
    align-items: center;
  }

  .contact-form .ant-input,
  .contact-form .ant-input-textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
  }

  .contact-form .ant-btn {
    width: 100%;
    background-color: #00aaff;
    border-color: #00aaff;
  }

  .contact-form .ant-btn:hover,
  .contact-form .ant-btn:focus {
    background-color: #0088cc;
    border-color: #0088cc;
  }


  @media (max-width: 567px){
    width: 90%;
    flex-direction: column;
    .contact-info {
      border-radius: 15px;
    }
    .contact-form {
      padding: 30px;
    }
  }
`
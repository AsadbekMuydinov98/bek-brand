import React from 'react';
import { Typography } from 'antd';
import SubmitButton from '../FormElements/SubmitButton';
import UniversalForm from '../UniversalForm';
import { LoginWrapper } from './style';
import { FormikProps } from 'formik';
import { Field } from '../../../interfaces';

const { Title } = Typography;


interface SignInFormProps {
  ev: React.MouseEventHandler<HTMLDivElement>;
  isSlide: boolean;
  formik: FormikProps<unknown>; 
  isLoading: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({ ev, isSlide, formik, isLoading }) => {
  const fields: Field[] = [
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
  ];

  return (
    <LoginWrapper className={`login ${isSlide ? 'slide-up' : ''}`}>
      <div className="center">
        <Title className="form-title" onClick={ev}>
          <span>or</span> Log in
        </Title>
        <form onSubmit={formik.handleSubmit}>
          <UniversalForm fields={fields} formik={formik} />
          <SubmitButton title={isLoading ? 'Loading...' : 'Sign Up'} />
        </form>
      </div>
    </LoginWrapper>
  );
};

export default SignInForm;

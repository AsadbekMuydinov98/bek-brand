import React from 'react';
import { Typography } from 'antd';
import SubmitButton from '../FormElements/SubmitButton';
import UniversalForm from '../UniversalForm';
import { SignUpWrapper } from './style';
import { FormikProps } from 'formik';
import { Field } from '../../../interfaces';

const { Title } = Typography;

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  ev: React.MouseEventHandler<HTMLDivElement>;
  isSlide: boolean;
  formik: FormikProps<SignUpFormValues>;
  isLoading: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ ev, isSlide, formik, isLoading }) => {
  const fields: Field[] = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter Name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
  ];

  return (
    <SignUpWrapper className={`signup ${isSlide ? 'slide-up' : ''}`}>
      <Title className="form-title" id="signup" onClick={ev}>
        <span>or</span> Sign up
      </Title>
      <form onSubmit={formik.handleSubmit}>
        <UniversalForm fields={fields} formik={formik} />
        <SubmitButton title={isLoading ? 'Loading...' : 'Sign Up'} />
      </form>
    </SignUpWrapper>
  );
};

export default SignUpForm;

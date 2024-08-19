import { Typography } from "antd";
import SubmitButton from "../FormElements/SubmitButton";
import UniversalForm from "../UniversalForm";
import { SignUpWrapper } from "./style";
const {Title} = Typography
const SignUpForm = ({ev, isSlide, formik, isLoading}) => {
  const fields = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter Name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
  ];
  return (
    <SignUpWrapper className={`signup ${isSlide ? 'slide-up' : ''}`}>
      <Title className="form-title" id="signup" onClick={ev}><span>or</span>Sign up</Title>
      <form onSubmit={formik.handleSubmit} >
          <UniversalForm
            fields={fields}
            formik={formik}
          />
        <SubmitButton title={isLoading ? 'loading...' : 'Sign Up'} />
      </form>
    </SignUpWrapper>
  );
};

export default SignUpForm;


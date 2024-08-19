import { Typography } from "antd";
import SubmitButton from "../FormElements/SubmitButton";
import UniversalForm from "../UniversalForm";
import { LoginWrapper } from "./style";
const {Title} = Typography
const SignInForm = ({ev, isSlide, formik, isLoading}) => {
  const fields = [
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
  ];

  return (
    <LoginWrapper className={`login ${isSlide ? 'slide-up' : ''}`}>
      <div className="center">
        <Title className="form-title" onClick={ev}><span>or</span>Log in</Title>
        <form onSubmit={formik.handleSubmit} >
            <UniversalForm
              fields={fields}
              formik={formik}
            />
          <SubmitButton title={isLoading ? 'loading...' : 'Sign Up'} />
        </form>
      </div>
    </LoginWrapper>
  );
};

export default SignInForm;

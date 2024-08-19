import { Button, Form, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterWrapper, RegisterFormWrapper } from './style';
import UniversalForm from '../../components/Forms/UniversalForm';
import { useFormik } from 'formik';
import register from '../../services/register';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../../redux/slice/auth';
import { validationSchema, initialValues, fields } from './helper';

const { Title } = Typography;



const Signup = () => {
  const {isLoading} = useSelector(state => state.auth)
  const theme = useSelector((state) => state.theme.mode); 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formikSignUp = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(signUserStart()) 
      register.Signup(values).then(response => {
        dispatch(signUserSuccess(response))
        navigate('/')
      }).catch(error => {
        dispatch(signUserFailure(error.response.data.errors))
        console.log(error);
      });
    }
  });
  

  return (
    <RegisterWrapper $themeMode={theme}>
      <RegisterFormWrapper $themeMode={theme}>
        <Title level={2}>Register</Title>
        <form
          name="register"
          onSubmit={formikSignUp.handleSubmit}
        >
          <UniversalForm
            fields={fields}
            formik={formikSignUp}
          />

          <Form.Item>
            <Button  type="primary" htmlType="submit">
              {isLoading ? "loading..." : "Sign up"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/login">Already have an account? Login</Link>
          </Form.Item>
        </form>
      </RegisterFormWrapper>
    </RegisterWrapper>
  );
};

export default Signup;

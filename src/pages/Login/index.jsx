import { Form, Button, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginWrapper, LoginFormWrapper } from './style';
import { useFormik } from 'formik';
import UniversalForm from '../../components/Forms/UniversalForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../../redux/slice/auth';
import register from '../../services/register';
import { validationSchema, fields, initialValues } from './helper';

const { Title } = Typography;


const Login = () => {
  const {isLoading} = useSelector(state => state.auth)
  const theme = useSelector((state) => state.theme.mode); 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formikSignIn = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => { 
      dispatch(signUserStart())     
      register.Login(values).then(response => {
        dispatch(signUserSuccess(response))   
        navigate('/')
      }).catch(error => {
        dispatch(signUserFailure(error.response.data.errors))
        if (error.response) {
          message.error(error.response.data.message)
        } else {
          console.error('Request was made but no response received');
        }
      });
    }
  });

  return (
    <LoginWrapper $themeMode={theme}>
      <LoginFormWrapper $themeMode={theme}>
        <Title level={2}>Login</Title>
        <form onSubmit={formikSignIn.handleSubmit}>
          <UniversalForm
            fields={fields}
            formik={formikSignIn}
          />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isLoading ? "loading..." : "Sign in"}
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/register">Don't have an account? Register</Link>
          </Form.Item>
        </form>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default Login;

import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").min(5, "It must be more than 5 symbols"),
  password: Yup.string().required("Password is required").min(3, "It must be more than 8 symbols"),
});

export const fields = [
  { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
  { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
];

export const initialValues = {
  email: '',
  password: '',
};
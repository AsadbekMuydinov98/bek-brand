// helper.js
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  phone: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number is not valid'),
  address: Yup.string().required('Address is required'),
});

export const initialValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
  address: '',
};

export const fields = [
  { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter Name' },
  { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter Email' },
  { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
  { name: 'phone', type: 'text', label: 'Phone', placeholder: 'Enter Phone' },
  { name: 'address', type: 'text', label: 'Address', placeholder: 'Enter City, street, zip-code' },
];

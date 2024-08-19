import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required').min(0, 'Price must be a positive number'),
  discountPercent: Yup.number().min(0, 'Discount must be a positive number').max(100, 'Discount cannot exceed 100'),
  color: Yup.string().required('Color is required'),
  category: Yup.string().required('Category is required'),
  brand: Yup.string().required('Brand is required'),
  amount: Yup.number().required('Amount is required').min(0, 'Amount must be a positive number'),
  images: Yup.array().required('Images are required').min(1, 'At least one image is required')
});

export default validationSchema;

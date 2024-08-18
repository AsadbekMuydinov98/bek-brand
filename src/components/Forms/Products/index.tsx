import React from 'react';
import { Button, Typography } from 'antd';
import UniversalForm from '../UniversalForm';
import { FormikProps } from 'formik';
import { Field, ProductFormValues, SelectOption } from '../../../interfaces';

const { Title } = Typography;


interface ProductFormProps {
  formik: FormikProps<ProductFormValues>;
  colors: SelectOption[];
  categories: SelectOption[];
  brands: SelectOption[];
}

const ProductForm: React.FC<ProductFormProps> = ({ formik, colors, categories, brands, editingProduct }) => {
  const fields: Field[] = [
    { name: 'title', type: 'text', label: 'Title', placeholder: 'Enter Title' },
    { name: 'price', type: 'number', label: 'Price', placeholder: 'Enter Price' },
    { name: 'discountPercent', type: 'number', label: 'Discount Percent', placeholder: 'Enter Discount Percent' },
    { name: 'color', type: 'select', label: 'Color', placeholder: 'Select Color', options: colors },
    { name: 'category', type: 'select', label: 'Category', placeholder: 'Select Category', options: categories },
    { name: 'brand', type: 'select', label: 'Brand', placeholder: 'Select Brand', options: brands },
    { name: 'amount', type: 'number', label: 'Amount', placeholder: 'Enter Amount' },
    { name: 'description', type: 'textarea', label: 'Description', placeholder: 'Enter Description' },
    { name: 'images', type: 'upload', label: 'Images', placeholder: 'Upload Images', multiple: true }
  ];

  return (
    <div className="product-form">
      <Title className="form-title" id="product-form">{editingProduct === null ? 'Add Product' : "Edit product"}</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-holder">
          <UniversalForm fields={fields} formik={formik} />
        </div>
        <Button type="primary" >{editingProduct === null ? 'Add Product' : "Edit product"}</Button>
      </form>
    </div>
  );
};

export default ProductForm;

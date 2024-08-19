import { Typography } from "antd";
import SubmitButton from "../FormElements/SubmitButton";
import UniversalForm from "../UniversalForm";
const {Title} = Typography

const ProductForm = ({formik, colors, categories, brands, editingProduct}) => {
  const fields = [
    { name: 'title', type: 'text', label: 'Title', placeholder: 'Enter Title' },
    { name: 'price', type: 'number', label: 'Price', placeholder: 'Enter Price' },
    { name: 'discountPercent', type: 'number', label: 'Discount Percent', placeholder: 'Enter Discount Percent' },
    { name: 'color', type: 'select', label: 'Color', placeholder: 'Select Color',  options: colors },
    { name: 'category', type: 'select', label: 'Category', placeholder: 'Select Category', options: categories },
    { name: 'brand', type: 'select', label: 'Brand', placeholder: 'Select Brand', options: brands },
    { name: 'amount', type: 'number', label: 'Amount', placeholder: 'Enter Amount' },
    { name: 'description', type: 'textarea', label: 'Description', placeholder: 'Enter Description' },
    { name: 'images', type: 'upload', label: 'Images', placeholder: 'Upload Images', multiple: true}
  ];

  return (
    <div className="product-form">
      <Title level={3} className="form-title" id="product-form">{editingProduct === null ? 'Add Product' : "Edit product"}</Title>
      <form  onSubmit={formik.handleSubmit}>
        <div className="form-holder">
          <UniversalForm
            fields={fields}
            formik={formik}
          />
        </div>
        <SubmitButton title={editingProduct === null ? 'Add Product' : "Edit product"} />
      </form>
    </div>
  );
};

export default ProductForm;
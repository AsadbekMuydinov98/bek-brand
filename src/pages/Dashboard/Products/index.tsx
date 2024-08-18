import { useCallback, useEffect, useState } from 'react';
import { Button, message } from 'antd';
import UniversalTable from '../../../components/UniversalTable';
import UniversalModal from '../../../components/Modal/UniversalModal';
import ProductForm from '../../../components/Forms/Products';
import { useFormik } from 'formik';
import initialFormValues from './initialFormValues';
import validationSchema from './validationSchema';
import getColumns from './columns';
import product from '../../../services/product';
import categoryService from '../../../services/category';
import colorService from '../../../services/color';
import brandService from '../../../services/brand';
import './style.css';
import { getProduct } from '../../../interfaces';

const ProductsList = () => {
  const [products, setProducts] = useState<getProduct[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<getProduct | null>(null);
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colorsData = await colorService.getColors();
        setColors(colorsData.map((color: { _id: string; name: string; }) => ({ value: color._id, label: color.name })));
        
        const categoriesData = await categoryService.getCategories();
        setCategories(categoriesData.map((category: { _id: string; name: string; }) => ({ value: category._id, label: category.name })));
        
        const brandsData = await brandService.getBrands();
        setBrands(brandsData.map((brand: { _id: string; name: string; }) => ({ value: brand._id, label: brand.name })));
      } catch (error) {
        message.error('Failed to load data');
      }
    };

    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const result = await product.getProducts();
      setProducts(result);
      return result;
    } catch (error) {
      message.error('Failed to fetch products');
      console.error(error);
    }
  }, []);

  const deleteProduct = async (id: string) => {
    try {
      await product.deleteProduct(id);
      message.success('Product deleted successfully');
      fetchData(); 
    } catch (error) {
      message.error('Failed to delete product');
      console.error(error);
    }
  };

  const formikProduct = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values) => {
      if (editingProduct) {
        product.updateProduct(editingProduct._id, values)
          .then(() => {
            message.success('Product updated successfully');
            handleCancel();
            fetchData();
          })
          .catch((error) => {
            message.error('Failed to update product');
            console.error(error);
          });
      } else {
        product.createProduct(values)
          .then(() => {
            message.success('Product created successfully');
            handleCancel();
            fetchData();
          })
          .catch((error) => {
            message.error('Failed to create product');
            console.error(error);
          });
      }
    }
  });

  const editProduct = async (id: string) => {
    try {
      const productData: getProduct = await product.getProductById(id);
      formikProduct.resetForm(); 
      formikProduct.setValues({
        title: productData.title,
        description: productData.description,
        price: productData.price,
        discountPercent: productData.discountPercent,
        color: { _id: productData.color._id }, 
        category: { _id: productData.category._id }, 
        brand: { _id: productData.brand._id }, 
        amount: productData.amount,
        images: productData.images
      });
      setEditingProduct(productData);
      setIsModalVisible(true);
    } catch (error) {
      message.error('Failed to fetch product data');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <UniversalModal visible={isModalVisible} onCancel={handleCancel}>
        <ProductForm editingProduct={editingProduct} colors={colors} categories={categories} brands={brands} formik={formikProduct} />
      </UniversalModal>
      <Button type="primary" onClick={showModal}>Add New Product</Button>
      <UniversalTable fetchData={fetchData} columns={getColumns(editProduct, deleteProduct)} />
    </div>
  );
};

export default ProductsList;

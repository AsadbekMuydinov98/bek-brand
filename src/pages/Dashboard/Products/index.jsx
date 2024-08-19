import{ useCallback, useEffect, useState } from 'react';
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


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    colorService.getColors().then(response => {
      setColors(response.map(color => ({ value: color._id, label: color.name })));
    }).catch(error => {
      message.error('Failed to load colors:', error);
    });

    categoryService.getCategories().then(response => {
      setCategories(response.map(category => ({ value: category._id, label: category.name })));
    }).catch(error => {
      message.error('Failed to load categories:', error);
    });

    brandService.getBrands().then(response => {
      setBrands(response.map(brand => ({ value: brand._id, label: brand.name })));
    }).catch(error => {
      message.error('Failed to load brands:', error);
    });
  }, []);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const fetchData = useCallback(async () => {
    try {
      const result = await product.getProducts();
      setProducts(result);
      return result;
    } catch (error) {
      message.error('Failed to fetch products');
    }
  }, [products])

  const deleteProduct = async (id) => {
    try {
      await product.deleteProduct(id);
      message.success('Product deleted successfully');
      fetchData(); 
    } catch (error) {
      message.error('Failed to delete product');
    }
  };

  const formikProduct = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values) => {
      if (editingProduct) {
        product.updateProduct(editingProduct._id, values)
          .then((response) => {
            message.success('Product updated successfully');
            handleCancel();
            fetchData();
          })
          .catch((error) => {
            message.error('Failed to update product');
            console.log(error);
          });
      } else {
        product.createProduct(values)
          .then((response) => {
            message.success('Product created successfully');
            handleCancel();
            fetchData();
          })
          .catch((error) => {
            message.error('Failed to create product');
            console.log(error);
          });
      }
    }
  });

  const editProduct = async (id) => {
    try {
      const productData = await product.getProductById(id);
      formikProduct.resetForm(); 
      formikProduct.setValues({
        title: productData.title,
        description: productData.description,
        price: productData.price,
        discountPercent: productData.discountPercent,
        color: productData.color._id,
        category: productData.category._id,
        brand: productData.brand._id,
        amount: productData.amount,
        images: productData.images
      });
      setEditingProduct(productData);
      setIsModalVisible(true);
    } catch (error) {
      message.error('Failed to fetch product data');
    }
  };
  

  return (
    <div>
      <UniversalModal visible={isModalVisible} onCancel={handleCancel}>
        <ProductForm colors={colors} categories={categories} brands={brands} formik={formikProduct} />
      </UniversalModal>
      <Button type="primary" onClick={showModal}>Add New Product</Button>
      <UniversalTable fetchData={fetchData} columns={getColumns(editProduct, deleteProduct)} />
    </div>
  );
};

export default ProductsList;

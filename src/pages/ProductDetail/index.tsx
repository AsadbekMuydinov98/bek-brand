import React, { useEffect, useState } from 'react';
import { Row, Card, Col, message } from 'antd';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductItems/ProductImage';
import ProductInfo from './ProductItems/Info';
import ProductActions from './ProductItems/ProductActions';
import SocialShare from './ProductItems/SocialShare';
import { ProductWrapper } from './style';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slice/products';
import productService from '../../services/product';
import { RootState } from '../../redux/store';
import { ProductFormValues } from '../../interfaces';


const ProductDetailPage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductFormValues | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product: Product) => {
    if (user) {
      dispatch(addToCart(product, user.id));
      message.success('Added to cart');
    } else {
      // Show modal or redirect to login
      console.log("User not logged in");
    }
  };

  if (loading) return <Loader visible={loading} />;
  
  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>No product found</div>;

  return (
    <ProductWrapper>
      <Card>
        <Row >
          <ProductImage images={product.images} />
          <Col xs={24} sm={24} lg={10}>
            <ProductInfo product={product} />
            <ProductActions handleAddToCart={handleAddToCart} product={product} />
            <SocialShare />
          </Col>
        </Row>
      </Card>
    </ProductWrapper>
  );
};

export default ProductDetailPage;

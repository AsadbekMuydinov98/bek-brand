import { Row, Card, Col, message } from 'antd';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductItems/ProductImage'
import ProductInfo from './ProductItems/Info'
import ProductActions from './ProductItems/ProductActions'
import SocialShare from './ProductItems/SocialShare'
import { ProductWrapper } from './style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slice/products';
import Loader from '../../components/Loader';
import productService from '../../services/product';



const ProductDetailPage = () => {
  const { user } = useSelector(state => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data)
      } catch (error) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart(product, user.id));
      message.success('Added to cart');
    } else {
      // showModal();
      console.log("xato");
    }
  };

  if (loading) return <Loader visible={loading} />

  return (
    <ProductWrapper>
      <Card>
        <Row>
          <ProductImage images={product.images} />
          <Col sm={24} lg={10}>
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
import { Row, Typography } from 'antd';
import VerticalCard from '../../../../components/Cards/Vertical';
import '../Product/style.css'

const { Title } = Typography;

const AdsProducts = ({ adsproducts, isLoading }) => {
  const featuredProducts = adsproducts.slice(0, 3);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Title className="section-title">FEATURED PRODUCTS</Title>
      <Row justify="center" className="products-section">
        {featuredProducts.map((product, index) => (
          <VerticalCard key={product._id || index} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default AdsProducts;

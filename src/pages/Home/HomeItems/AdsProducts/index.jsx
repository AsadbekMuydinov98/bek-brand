import { Row, Typography } from 'antd'
import VerticalCard from '../../../../components/Cards/Vertical'
const {Title} = Typography

const AdsProducts = ({adsproducts}) => {
  const featuredProducts = adsproducts.slice(0, 3);
  return (
    <div>
      <Title className="section-title">FEATURED PRODUCTS</Title>
      <Row justify="center" className="products-section">
        {featuredProducts.map((product, index) => (
          <VerticalCard key={index} product={product} />
        ))}
      </Row>
    </div>
  )
}

export default AdsProducts
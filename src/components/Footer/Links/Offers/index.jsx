import { Col, Typography } from 'antd';
import { Link } from 'react-router-dom'
const { Title } = Typography;

const Offers = ({links}) => {
  return (
    <Col xs={12} md={6}>
      <Title level={3}>Our offers</Title>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index * 4}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </Col>
  )
}

export default Offers

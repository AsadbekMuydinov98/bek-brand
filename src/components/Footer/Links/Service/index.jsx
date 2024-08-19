import { Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography;

const Service = ({links}) => {
  return (
    <Col xs={12} md={6}>
      <Title level={3}>Services</Title>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </Col>
  )
}

export default Service

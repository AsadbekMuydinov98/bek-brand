import React from 'react';
import { Col, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface LinkItem {
  href: string;
  text: string;
}

interface OffersProps {
  links: LinkItem[];
}

const Offers: React.FC<OffersProps> = ({ links }) => {
  return (
    <Col xs={12} md={6}>
      <Title level={3}>Our offers</Title>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index * 4}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default Offers;

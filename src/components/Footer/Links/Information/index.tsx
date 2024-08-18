import React from 'react';
import { Col, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface LinkItem {
  href: string;
  text: string;
}

interface InformationProps {
  links: LinkItem[];
}

const Information: React.FC<InformationProps> = ({ links }) => {
  return (
    <Col xs={12} md={6}>
      <Title level={3}>Information</Title>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index * 2}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default Information;

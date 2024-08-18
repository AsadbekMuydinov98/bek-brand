import React from 'react';
import { Col, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface LinkItem {
  href: string;
  text: string;
}

interface AccountProps {
  links: LinkItem[];
}

const Account: React.FC<AccountProps> = ({ links }) => {
  return (
    <Col xs={12} md={6}>
      <Title level={3}>My Account</Title>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index * 3}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default Account;

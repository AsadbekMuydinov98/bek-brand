import React from 'react';
import { Col, Typography } from 'antd';

const { Title, Text } = Typography;

const Contact: React.FC = () => {
  return (
    <Col xs={24} sm={12} md={6}>
      <Title level={3}>Contact Us</Title>
      <Text>E-Comm, 4578 Marmora Road, Glasgow D04 89GR</Text>
    </Col>
  );
};

export default Contact;

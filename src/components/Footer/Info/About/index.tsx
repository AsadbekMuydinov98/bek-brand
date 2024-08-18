import React from 'react';
import { Col, Typography } from 'antd';

const { Title, Text } = Typography;

const About: React.FC = () => {
  return (
    <Col xs={24} sm={12} md={6}>
      <Title level={3}>E-Comm</Title>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer.
      </Text>
    </Col>
  );
};

export default About;

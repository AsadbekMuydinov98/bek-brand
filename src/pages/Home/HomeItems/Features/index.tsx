import React from 'react';
import { Row, Typography } from 'antd';
import Feature from './Item';
import { FeaturesProps } from '../../../../interfaces';

const { Title } = Typography;

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div>
      <Title className="section-title">Features</Title>
      <Row justify="center" className="features-section">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </Row>
    </div>
  );
};

export default Features;

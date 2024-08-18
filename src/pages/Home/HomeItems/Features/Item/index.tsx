import React from 'react';
import { Col } from 'antd';
import './style.css';
import { FeatureType } from '../../../../../interfaces';


const Feature: React.FC<FeatureType> = ({ icon, title, description }) => {
  return (
    <Col span={8} className="feature">
      <i className='feature-icon'>{icon}</i>
      <h3>{title}</h3>
      <p>{description}</p>
    </Col>
  );
};

export default Feature;

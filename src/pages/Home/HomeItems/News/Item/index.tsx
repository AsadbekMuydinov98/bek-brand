import React from 'react';
import { Col } from 'antd';
import './style.css';
import { NewsItemProps } from '../../../../../interfaces';

const NewsItem: React.FC<NewsItemProps> = ({ title, description, date, logo }) => {
  return (
    <Col span={8} className="news-item">
      <span className="news-logo">{logo}</span>
      <p className="news-date">{date}</p>
      <h4>{title}</h4>
      <p>{description}</p>
    </Col>
  );
};

export default NewsItem;
import React from 'react';
import { Col } from 'antd';
import './style.css';

const NewsItem = ({ logo, date, title, description }) => {
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
import React from 'react';
import { Row, Typography } from 'antd';
import NewsItem from './Item';
import { NewsItemProps } from '../../../../interfaces';

const { Title } = Typography;

interface NewsProps {
  newsItems: NewsItemProps[];
}

const News: React.FC<NewsProps> = ({ newsItems }) => {
  return (
    <div>
      <Title className="section-title">LATEST NEWS</Title>
      <Row justify="center" className="news-section">
        {newsItems.map((news, index) => (
          <NewsItem key={index} {...news} />
        ))}
      </Row>
    </div>
  );
};

export default News;

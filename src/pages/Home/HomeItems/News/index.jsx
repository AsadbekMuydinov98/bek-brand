import { Row, Typography } from 'antd'
import NewsItem from './Item'
const {Title} = Typography

const News = ({newsItems}) => {
  return (
    <div>
      <Title className="section-title">LATEST NEWS</Title>
      <Row justify="center" className="news-section">
        {newsItems.map((news, index) => (
          <NewsItem key={index} {...news} />
        ))}
      </Row>
    </div>
  )
}

export default News

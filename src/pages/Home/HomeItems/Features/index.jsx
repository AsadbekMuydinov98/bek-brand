import { Row, Typography } from 'antd'
import Feature from './Item'
const {Title} = Typography

const Features = ({features}) => {
  return (
    <div>
        <Title className="section-title">Features</Title>
        <Row justify="center" className="features-section">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </Row>
    </div>
  )
}

export default Features

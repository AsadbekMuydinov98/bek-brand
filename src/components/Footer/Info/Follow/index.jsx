import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Typography } from "antd"
const { Title, Text } = Typography;

const Follow = () => {
  return (
    <Col xs={24} sm={12} md={6}>
      <Title level={3}>Follow Us</Title>
      <Text>Since the 1500s, when an unknown printer took a galley of type and scrambled.</Text>
      <div className="social-icons">
        <FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <TwitterOutlined style={{ fontSize: '24px' }} />
      </div>
    </Col>
  )
}

export default Follow

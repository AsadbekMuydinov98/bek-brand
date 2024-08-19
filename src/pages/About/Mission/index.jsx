import { Row, Col, Card, Typography } from 'antd';

const { Paragraph } = Typography;

const MissionVision = () => {
  return (
    <div className="mission-vision">
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card title="Our Mission">
            <Paragraph>
              Our mission is to provide the best [product category] to our customers, ensuring that each product meets our high standards of quality. We strive to offer our customers something they can feel proud of owning and show off to their friends and family.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Our Vision">
            <Paragraph>
              Our vision is to be the leading provider of [product category] worldwide, known for our commitment to excellence, innovation, and sustainability.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MissionVision;
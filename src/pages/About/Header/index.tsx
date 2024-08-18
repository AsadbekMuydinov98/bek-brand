import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutHeader = () => {
  return (
    <div className="about-header">
      <Title level={1}>About Us</Title>
      <Paragraph>
        Welcome to [Your Store Name], your number one source for all things [product category]. We're dedicated to giving you the very best of [product category], with a focus on quality, customer service, and uniqueness.
      </Paragraph>
    </div>
  );
};

export default AboutHeader;
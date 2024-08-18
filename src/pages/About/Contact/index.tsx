import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <div className="contact">
      <Title level={2}>Contact Us</Title>
      <Paragraph>If you have any questions or comments, please don't hesitate to contact us.</Paragraph>
      <Paragraph>Email: <a href="mailto:asadbekmuydinov@gmail.com">asadbekmuydinov@gmail.com</a></Paragraph>
      <Paragraph>Phone: <a href="tel:+01046984777">+01046984777</a></Paragraph>
    </div>
  );
};

export default Contact;
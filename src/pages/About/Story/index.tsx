import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const OurStory = () => {
  return (
    <div className="our-story">
      <Title level={2}>Our Story</Title>
      <Paragraph>
        [Your Store Name] was founded in [year] by [founder name], [who/which] started out [his/her/their] passion for [something inspiring]. It was a need for high-quality and affordable [product category] that drove [founder name] to do intense research, and gave [him/her/them] the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over [location, city, state, country], and are thrilled to be a part of the [adjective, e.g., quirky, eco-friendly, fair trade] wing of the [product category] industry.
      </Paragraph>
    </div>
  );
};

export default OurStory;
import { Typography } from "antd"

const {Paragraph, Title} = Typography

const Info = () => {
  return (
    <div className="contact-info">
      <img src="https://t4.ftcdn.net/jpg/07/03/05/35/240_F_703053527_kaGULNPr77LJFKmqOdzD7746bI34NXfI.jpg" alt="Get in touch" className="contact-image" />
      <Title>Get in touch</Title>
      <Paragraph>contact@naver.com</Paragraph>
      <Paragraph>+010 4698 4777</Paragraph>
      <Paragraph>Seoul, South Korea</Paragraph>
    </div>
  )
}

export default Info

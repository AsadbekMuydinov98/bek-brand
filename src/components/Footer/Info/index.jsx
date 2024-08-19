import { Row } from 'antd'
import About from './About'
import Follow from './Follow'
import Contact from './Contact'

const Info = () => {
  return (
    <Row gutter={[16, 16]}>
      <About />
      <Follow />
      <Contact />
    </Row>
  )
}

export default Info

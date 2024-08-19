import { Row } from 'antd'
import Copyright from './Copyright'
import Payment from './Payment'

const Bottom = () => {
  return (
    <Row justify="space-between" align="middle">
      <Copyright />
      <Payment />
    </Row>
  )
}

export default Bottom

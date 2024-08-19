import { Button, Col, Input, Space } from 'antd'

const Coupon = () => {
  return (
    <Col xs={24} lg={16}>
      <Space.Compact className="coupon-container">
        <Input size="large" placeholder="Voucher code" />
        <Button size="large" type="primary">Redem</Button>
      </Space.Compact>
    </Col>
  )
}

export default Coupon

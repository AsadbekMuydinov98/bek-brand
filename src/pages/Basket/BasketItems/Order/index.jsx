import { Button, Col } from 'antd'
import Schet from './Schet'

const Order = ({calculateTotal, couponCode, showModal}) => {
  return (
    <Col xs={24} lg={8}>
      <div className="order-summary">
        <Schet title={'Subtotal:'} summ={`$${calculateTotal - 20}`} />
        <Schet title={'Shipping fee:'} summ={'20$'} />
        <Schet title={'Coupon:'} summ={couponCode ? "SUMMER10" : "No"} />
        <Schet title={'TOTAL:'} summ={`$${calculateTotal}`} />
        <Button
          type="primary"
          block
          style={{ marginTop: 16 }}
          onClick={showModal}
        >
          Check out
        </Button>
      </div>
    </Col>
  )
}

export default Order

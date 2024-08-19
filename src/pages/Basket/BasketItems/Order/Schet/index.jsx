import { Typography } from 'antd'
import './style.css'

const Schet = ({title, summ}) => {
  return (
    <div className='schet'>
      <Typography.Text strong>{title}</Typography.Text>
      <Typography.Text strong>{summ}</Typography.Text>
    </div>
  )
}

export default Schet

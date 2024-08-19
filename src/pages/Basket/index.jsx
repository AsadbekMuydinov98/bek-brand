import { useEffect, useState } from "react";
import { createColumns } from "./helpers";
import { useDispatch, useSelector } from "react-redux";
import Coupon from './BasketItems/Coupon';
import Order from './BasketItems/Order';
import { Table, Row, Col, message, Typography } from "antd";
import { BasketWrapper } from "./style";
import { fetchCart, removeFromCart } from "../../redux/slice/products";
import Loader from "../../components/Loader";
import UniversalModal from "../../components/Modal/UniversalModal";
import PaymentForm from "../../components/Payment";
import NotUser from "../../components/Modal/NotUser";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Basket = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { cart, loading } = useSelector(state => state.product);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.id) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      dispatch(fetchCart(user.id))
        .catch(error => {
          message.error(`Failed to fetch cart: ${error.message}`);
        });
    }
  }, [dispatch, user?.id]);

  const handleDelete = async (productId) => {
    try {
      if (user?.id) {
        await dispatch(removeFromCart(user.id, productId));
        message.success('Product removed from cart');
      } else {
        message.error('User ID not found');
      }
    } catch (error) {
      message.error(`Failed to remove product from cart: ${error.message}`);
    }
  };

  const handleChange = (productId, newCount) => {
    console.log('Handle change: ', productId, newCount);
  };

  const calculateTotal = () => {
    let subtotal = 0;
    cart?.forEach((product) => {
      const discountPrice = product.price - (product.price * (product.discountPercent / 100));
      subtotal += discountPrice * (product.count || 1);
    });
    const shippingCost = 20;
    const total = subtotal + shippingCost;
    return total;
  };

  const order = () => {
    setIsModalVisible(false)
  };

  const columns = createColumns(handleChange, handleDelete);

  const showModalReg = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };


  return (
    <BasketWrapper>
      <NotUser 
        open={open} 
        hideModal={hideModal} 
        showModal={showModalReg} 
        goToRegister={()=>navigate('/login')}
      />
      <Loader visible={loading} />
      <UniversalModal visible={isModalVisible} onCancel={() => setIsModalVisible(false)}>
        <PaymentForm order={order} />
      </UniversalModal>
      <Title className="title">My Basket</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={cart}
            pagination={false}
            size="small"
            rowKey={record => record._id}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Coupon />
        <Order calculateTotal={calculateTotal()} showModal={() => setIsModalVisible(true)} />
      </Row>
    </BasketWrapper>
  );
};

export default Basket;

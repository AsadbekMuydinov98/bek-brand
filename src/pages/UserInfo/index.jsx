import { useEffect, useState } from 'react';
import { Card, Avatar, Typography, Divider, Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import register from '../../services/register';
import { logoutUser, profileUser } from '../../redux/slice/auth';
import { getItem } from '../../helpers/persistance-storage';
import { columns } from './helper';
import { ProfileWrapper } from './style';
import { LaptopNavbar, MobileNavbar } from '../../components';
import Loader from '../../components/Loader';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const fetchUserProfile = async () => {
    try {
      const response = await register.Profile();
      dispatch(profileUser(response));
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const Logout = () =>{
    dispatch(logoutUser());
    navigate('/');
  }

  useEffect(() => {
    const token = getItem('accessToken');
    if (token) {
      fetchUserProfile();
    }
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
      setOrders(storedOrders);
    }
  }, []);

  if(loading) return <Loader visible={loading} />
  return (
    <ProfileWrapper>
      <LaptopNavbar />
      <MobileNavbar />
      {user ? (
        <Card>
          <Avatar size={128} src={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'} />
          <Title level={3}>{user.name}</Title>
          <Paragraph>Email: {user.email}</Paragraph>
          <Paragraph>Phone: {user.phone}</Paragraph>
          <Button 
            type="primary" 
            danger
            onClick={Logout}
          >
              <LogoutOutlined/>
              Logout
          </Button>
          <Divider />
          <Title level={4}>Order History</Title>
          <Table dataSource={orders} columns={columns} rowKey="id" />
        </Card>
      ) : (
        !loading && <p>No user data available</p>
      )}
    </ProfileWrapper>
  );
};

export default Profile;

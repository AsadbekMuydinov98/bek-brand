import { useState } from 'react';
import {
  DashboardOutlined,
  FormatPainterOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  ShoppingCartOutlined,
  TrademarkCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { 
  siderStyle, 
  headerStyle, 
  menuToggleBtnStyle, 
  logoutBtnStyle, 
  contentStyle 
} from './dashboardStyles';
import { logoutUser } from '../../redux/slice/auth';
import { useDispatch } from 'react-redux';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logOut = () => {
    dispatch(logoutUser());
    navigate('/')

  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard/statistics">Statistics</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            <Link to="/dashboard/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<OrderedListOutlined />}>
            <Link to="/dashboard/categories">Categories</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FormatPainterOutlined />}>
            <Link to="/dashboard/colors">Colors</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/dashboard/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<TrademarkCircleOutlined />}>
            <Link to="/dashboard/brands">Brands</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={headerStyle(colorBgContainer)}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={menuToggleBtnStyle}
          />
          <Button style={logoutBtnStyle} onClick={logOut} danger>
            <LogoutOutlined style={{ marginRight: 8 }} />Logout
          </Button>
        </Header>
        <Content style={contentStyle(colorBgContainer, borderRadiusLG)}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

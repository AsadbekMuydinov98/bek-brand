import { AppstoreOutlined, HeartFilled, HomeOutlined, InfoCircleOutlined, PhoneOutlined } from "@ant-design/icons";

export const links = [
  { text: 'About Us', href: '#' },
  { text: 'Information', href: '#' },
  { text: 'Privacy Policy', href: '#' },
  { text: 'Terms & Conditions', href: '#' }
];

export const laptopMenuItems = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/favourites', label: 'Favourites' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export const mobileMenuItems = [
  { key: '1', icon: <AppstoreOutlined />, link: '/products' },
  { key: '2', icon: <HeartFilled />, link: '/favourites' },
  { key: '3', icon: <HomeOutlined />, link: '/' },
  { key: '4', icon: <InfoCircleOutlined />, link: '/about' },
  { key: '5', icon: <PhoneOutlined />, link: '/contact' }
];
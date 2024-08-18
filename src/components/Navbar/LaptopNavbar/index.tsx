import { Link, useLocation } from 'react-router-dom';
import Item from './Item';
import { ToggleTheme } from '../..';
import { laptopMenuItems } from '../../../constants/links';
import { LapNavWrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setActiveLink } from '../../../redux/slice/activelink';
import {Typography} from 'antd'
const {Title} = Typography

const LaptopNavbar: React.FC = () => {
  const theme = useSelector((state: { theme: { mode: string } }) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setActiveLink(location.pathname));
  }, [location, dispatch]);

  return (
    <LapNavWrapper $themeMode={theme as 'light' | 'dark'}>
      <Link to="/" className='logo'>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.611816" y="0.518677" width="44" height="44" rx="16" fill="#40BFFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M31.6737 20.7902C32.6283 21.7448 32.6283 23.2926 31.6737 24.2472L24.3404 31.5805C23.3857 32.5351 21.838 32.5351 20.8834 31.5805L13.5501 24.2472C12.5954 23.2926 12.5954 21.7448 13.5501 20.7902L20.8834 13.4569C21.838 12.5023 23.3857 12.5023 24.3404 13.4569L31.6737 20.7902ZM22.6119 18.6423L18.7355 22.5187L22.6119 26.395L26.4882 22.5187L22.6119 18.6423Z" fill="white"/>
        </svg>
        <Title level={3}>BekBrandUz</Title>
      </Link>
      <div>
        <ul id='navbar'>
          {laptopMenuItems.map((item) => (
            <Item key={item.label} to={item.path} title={item.label} />
          ))}
        </ul>
      </div>
      <ToggleTheme />
    </LapNavWrapper>
  );
}

export default LaptopNavbar;

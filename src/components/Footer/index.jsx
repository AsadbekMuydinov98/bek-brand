import { Layout, Divider } from 'antd';
import Links from './Links';
import {links} from '../../constants/links'
import Info from './Info';
import Bottom from './Bottom';
import { Ecomfooter } from './style';
import { useSelector } from 'react-redux';
const { Footer } = Layout;

const ECommFooter = () => {
  const theme = useSelector(state => state.theme.mode);
  return (
    <Ecomfooter $themeMode={theme}>
      <Footer className={theme ==='light' ? "light footer" : "dark footer"}>
        <Links links={links} />
        <Info />
        <Divider />
        <Bottom />
      </Footer>
    </Ecomfooter>
  );
}

export default ECommFooter;
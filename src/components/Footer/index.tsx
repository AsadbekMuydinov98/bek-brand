import React from 'react';
import { Layout, Divider } from 'antd';
import Links from './Links';
import { links } from '../../constants/links';
import Info from './Info';
import Bottom from './Bottom';
import { Ecomfooter } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Footer } = Layout;

const ECommFooter: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <Ecomfooter $themeMode={theme as 'light' | 'dark'}>
      <Footer className={theme === 'light' ? 'light footer' : 'dark footer'}>
        <Links links={links} />
        <Info />
        <Divider />
        <Bottom />
      </Footer>
    </Ecomfooter>
  );
}

export default ECommFooter;

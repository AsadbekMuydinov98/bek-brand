import { useDispatch, useSelector } from 'react-redux';
import MyRouter from './router';
import './App.css'
import { useEffect } from 'react';
import register from './services/register';
import { profileUser } from './redux/slice/auth';
import { getItem } from './helpers/persistance-storage';
import { ConfigProvider } from 'antd';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const fetchUserProfile = async () => {
    try {
      const response = await register.Profile();
      dispatch(profileUser(response)); 
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }

  useEffect(() => {
    const token = getItem('accessToken');
    if (token) {
      fetchUserProfile();
    }
  }, []);

  const lightThemeTokens = {
    colorPrimary: '#40BFFF',
    color: 'black',
    colorBgContainer: 'white',
    colorText: 'black',
  };

  const darkThemeTokens = {
    colorPrimary: '#40BFFF',
    color: 'white',
    colorBgContainer: '#2F3645',
    colorText: 'white',
  };

  const currentTokens = theme === 'dark' ? darkThemeTokens : lightThemeTokens;

  return (
    <div className={`App ${theme}`}>
      <ConfigProvider theme={{ token: currentTokens }}>
        <MyRouter />  
      </ConfigProvider>
    </div>
  );
}

export default App;

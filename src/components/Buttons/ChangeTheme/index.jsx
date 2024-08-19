import { Space, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../redux/slice/theme'


const ChangeTheme = () => {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="light"
        unCheckedChildren="dark"
        checked={theme === 'light'}
        onChange={handleToggleTheme}
      />
    </Space>
  )
}

export default ChangeTheme

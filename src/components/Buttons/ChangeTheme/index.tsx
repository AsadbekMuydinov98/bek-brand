import React from 'react';
import { Space, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { toggleTheme } from '../../../redux/slice/theme';

const ChangeTheme: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleTheme = (checked: boolean) => {
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
  );
};

export default ChangeTheme;

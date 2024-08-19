export const siderStyle = {
  minHeight: '100vh',
};

export const headerStyle = (colorBgContainer) => ({
  padding: 0,
  background: colorBgContainer,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const menuToggleBtnStyle = {
  fontSize: '16px',
  width: 64,
  height: 64,
};

export const logoutBtnStyle = {
  display: 'flex',
  alignItems: 'center',
};

export const contentStyle = (colorBgContainer, borderRadiusLG) => ({
  margin: '24px 16px',
  padding: 24,
  minHeight: 280,
  background: colorBgContainer,
  borderRadius: borderRadiusLG,
});

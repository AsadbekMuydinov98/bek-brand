// src/styles.ts

import { CSSProperties } from 'react';

export const siderStyle: CSSProperties = {
  minHeight: '100vh',
};

export const headerStyle = (colorBgContainer: string): CSSProperties => ({
  padding: 0,
  background: colorBgContainer,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const menuToggleBtnStyle: CSSProperties = {
  fontSize: '16px',
  width: 64,
  height: 64,
};

export const logoutBtnStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

export const contentStyle = (colorBgContainer: string, borderRadiusLG: number): CSSProperties => ({
  margin: '24px 16px',
  padding: 24,
  minHeight: 280,
  background: colorBgContainer,
  borderRadius: borderRadiusLG,
});

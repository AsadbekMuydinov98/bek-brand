import styled from 'styled-components';
interface LoginProps {
  $themeMode: 'light' | 'dark';
}

export const LoginWrapper = styled.div<LoginProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#F0F2F5' : '#2F3645'};
  text-align: center;
`;

export const LoginFormWrapper = styled.div<LoginProps>`
  padding: 2rem;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#fff' : '#2C3E50'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

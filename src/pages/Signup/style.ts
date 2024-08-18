import styled from 'styled-components';
interface SignUpProps {
  $themeMode: 'light' | 'dark';
}

export const RegisterWrapper = styled.div<SignUpProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#F0F2F5' : '#2F3645'};
  text-align: center;
`;

export const RegisterFormWrapper = styled.div<SignUpProps>`
  min-width: 50%;
  padding: 5rem;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#fff' : '#2C3E50'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 567px) {
    padding: 4rem;
  }
`;

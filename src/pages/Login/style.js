import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#F0F2F5' : '#2F3645'};
  text-align: center;
  @media (max-width: 567px){
    max-height: 100vh;
    align-items: start;
  }
`;

export const LoginFormWrapper = styled.div`
  padding: 2rem;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#fff' : '#2C3E50'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 567px){
    width: 90%;
    margin-top: 4rem;
    padding: 1rem;
  }
`;

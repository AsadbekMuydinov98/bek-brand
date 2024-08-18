import styled from "styled-components";
interface MobNavProps {
  $themeMode: 'light' | 'dark';
}


export const MobNavWrapper = styled.div<MobNavProps>`
  @media (min-width: 720px) {

  .menu-wrapper{
    display: none;
  }
  
}
.menu-wrapper{
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  border-radius: 5px;
  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? 'rgba(255, 255, 255, 0.95)' : '#1A2B2F'};
}
.menus{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.menu-item {
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
  flex: 1;
  border: 1px solid #DDE3E9;
  border-radius: 5px;
  padding: 15px;
  a{
    color: #40BFFF;
    display: block;
    width: 100%;
    height: 100%;
  }
}
.active{
  background: #40BFFF;
  a{
    color: white;
    display: block;
    width: 100%;
    height: 100%;
  }
}

`
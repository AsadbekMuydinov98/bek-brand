import styled from "styled-components";
interface SortProps {
  $themeMode: 'light' | 'dark';
}

export const SortBarWrap = styled.div<SortProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background: ${({ $themeMode }) => 
    $themeMode === 'light' ? '#f9f9f9' : '#1A2B2F'};
  color: ${({ $themeMode }) => 
    $themeMode === 'light' ? '#000' : '#FFF'};

.sorting-type{
  display: flex;
  flex: 3;
  gap: 1.5rem;
  justify-content: flex-end;
  align-items: center;
}

.sort-by, .items-to-show {
  display: flex;
  align-items: center;
}

.sort-by span, .items-to-show span {
  margin-right: 8px;
}

.view-icons .anticon {
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
  color: #888;
}

.view-icons .anticon.active, .view-icons .anticon:hover {
  color: #1890ff;
}
.sort-search{
  flex: 2;
  width: 30%;
}

@media (max-width: 567px){
    display: none;
    flex-direction: column;
  &.mobile-sort-bar{
    display: block;
  }
  .sort-search{
    width: 100%;
  }
  .sorting-type{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

}`
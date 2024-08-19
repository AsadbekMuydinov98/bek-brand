import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 1rem;
  /* background-color: #2C3E50; */
  background: ${({ $themeMode }) => 
    $themeMode === 'light' ? 'aliceblue' : '#2C3E50'};

.filters{
  position: sticky;
  top: 150px;
}

.color-filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.color-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.color-circle.selected {
  box-shadow: 0 0 15px rgba(255, 0, 0, 1); 
}


.toggle-button {
  position: absolute;
  top: 10px;
  right:0px;
  background-color: #001529;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}


.color-filters {
  display: flex;
  gap: 10px;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
}


.price-title{
  margin-top: 0.5rem;
}
.price-range {
  margin-top: 0px;
}

.price-range-slider {
  margin-top: 10px;
}

@media (max-width: 567px) {
    display: none;
  &.sidebar-mobile{
    display: block;
  }
}


`
import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`
export const CardWrapper = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  min-width: 23%;
  flex-grow: 1;
`;

export const IconWrapper = styled.div`
  background-color: ${props => props.bgColor || '#eee'};
  border-radius: 50%;
  padding: 10px;
  margin-right: 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #888;
`;

export const StatChange = styled.div`
  font-size: 12px;
  color: ${props => (props.ispositive ? 'green' : props.ispositive===null ?'hsla(36, 100%, 64%, 1)':'red')};

  margin-top: 5px;
`;
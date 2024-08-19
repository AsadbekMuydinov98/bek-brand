import { CardWrapper, ContentWrapper, IconWrapper, StatChange, StatLabel, StatValue } from "../style";

const StatItem = ({ icon, value, label, change, ispositive, bgColor }) => {
  return (
    <CardWrapper>
      <IconWrapper bgColor={bgColor}>
        {icon}
      </IconWrapper>
      <ContentWrapper>
        <StatValue>{value}</StatValue>
        <StatLabel>{label}</StatLabel>
        <StatChange isPositive={ispositive}>
          {ispositive ? '↑' : '↓'} {change}% Last month
        </StatChange>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default StatItem
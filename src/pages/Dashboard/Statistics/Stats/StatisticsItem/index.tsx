import React from 'react';
import { CardWrapper, ContentWrapper, IconWrapper, StatChange, StatLabel, StatValue } from "../style";

interface StatItemProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  change: number;
  isPositive?: boolean;
  bgColor?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  change,
  isPositive = true, 
  bgColor = '#f0f0f0'
}) => {
  return (
    <CardWrapper>
      <IconWrapper bgColor={bgColor}>
        {icon}
      </IconWrapper>
      <ContentWrapper>
        <StatValue>{value}</StatValue>
        <StatLabel>{label}</StatLabel>
        <StatChange ispositive={isPositive}>
        {isPositive === true ? '↑' : isPositive === false ? '↓' : '↔'} {change}% Last month
        </StatChange>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default StatItem;

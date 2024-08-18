import React from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { CiFileOn, CiMail } from "react-icons/ci";
import { FaFeatherAlt } from "react-icons/fa";
import StatItem from "./StatisticsItem";
import { StatisticsWrapper } from './style';

interface StatisticsItem {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change: number;
  isPositive?: boolean | null;
  key: string;
}

const Stats: React.FC = () => {
  return (
    <StatisticsWrapper>
      {StatisticsItems.map((item) => (
        <StatItem {...item} key={item.key} />
      ))}
    </StatisticsWrapper>
  );
};

const StatisticsItems: StatisticsItem[] = [
  { icon: <IoStatsChartSharp />, label: 'Total visits', value: 1429, change: 4.07, isPositive: true, key: 'visitors' },
  { icon: <CiFileOn />, label: 'Total selling', value: 115, change: 0.24, isPositive: true, key: 'selling' },
  { icon: <CiMail />, label: 'Total Income', value: '15000$', change: 1.64, isPositive: false, key: 'income' },
  { icon: <FaFeatherAlt />, label: 'Satisfaction index', value: '67%', change: 0.00, isPositive: null, key: 'satisfaction' },
];

export default Stats;

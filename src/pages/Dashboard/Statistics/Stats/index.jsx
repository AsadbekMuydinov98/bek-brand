import { IoStatsChartSharp } from "react-icons/io5";
import { CiFileOn, CiMail  } from "react-icons/ci";
import { FaFeatherAlt } from "react-icons/fa";
import StatItem from "./StatisticsItem";
import {StatisticsWrapper} from './style'

const Stats = () => {
  return (
    <StatisticsWrapper>
      {
        StatisticsItems.map(item=>(
          <StatItem {...item} key={item.key} />
        ))
      }
    </StatisticsWrapper>
  )
}

const StatisticsItems = [
  { icon: <IoStatsChartSharp />, label: 'Total visits', value: 1429, change: 4.07, isPositive: true,  key: 'visitors' },
  { icon: <CiFileOn />,  label: 'Total selling', value: 115, change: 0.24,  isPositive: true,  key: 'selling' },
  { icon: <CiMail  />,  label: 'Total Income', value: '15000$', change: 1.64,  isPositive: false, key: 'income' },
  { icon: <FaFeatherAlt  />,  label: 'Satisfication index', value: '67%', change: 0.00,  isPositive: null,  key: 'satisfication' },
];

export default Stats

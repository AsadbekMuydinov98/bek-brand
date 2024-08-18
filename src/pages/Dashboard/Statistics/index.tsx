import { Statss, Left } from "./style";
import Stats from "./Stats";
import SalesChart from "./Chart";


const Dashboard = () => {
  return (
    <>
      <Stats />
      <Statss>
        <Left>
          <SalesChart />
        </Left>
      </Statss>

    </>
  );
};

export default Dashboard
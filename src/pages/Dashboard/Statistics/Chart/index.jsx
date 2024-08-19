import  { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

HighchartsAccessibility(Highcharts);

const SalesChart = () => {
  useEffect(() => {
    Highcharts.chart('container', {
      title: {
        text: 'Sales Report for the Last 6 Months',
        align: 'left'
      },
      subtitle: {
        text: 'Source: Your E-commerce Platform',
        align: 'left'
      },
      yAxis: {
        title: {
          text: 'Number of Sales'
        }
      },
      xAxis: {
        categories: ['February', 'March', 'April', 'May', 'June', 'July'],
        accessibility: {
          rangeDescription: 'Range: February to July'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 0
        }
      },
      series: [{
        name: 'Total Sales',
        data: [150, 200, 250, 300, 400, 500]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  }, []);

  return (
    <div id="container"></div>
  );
};

export default SalesChart;

const ChartJsNode = require('chartjs-node');

const IMG_WIDTH = 175;
const IMG_HEIGHT = 40;

const data = [10, 20, 40, 30, -10, 55, 60];

const chartJsOptions = {
  type: 'line',
  data: {
    labels: data.map(() => ''),
    datasets: [{
      label: '',
      data,
      borderWidth: 1,
      borderColor: 'red',
      fill: false,
      backgroundColor: 'blue',
      pointRadius: 0,
    }],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            // min: -100,
            // max: 100,
          },
        },
      ],
    },
  },
};

const chartJsNode = new ChartJsNode(IMG_WIDTH, IMG_HEIGHT);

chartJsNode.drawChart(chartJsOptions)
  .then(() => chartJsNode.writeImageToFile('image/png', 'test.png'))
  .catch(e => console.log(e));


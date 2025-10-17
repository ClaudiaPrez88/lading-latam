// =======================
// Pie Chart
// =======================
var optionsPie = {
  series: [28, 71],
  chart: {
    width: '100%',
    height: '250px',
    type: 'pie',
    fontFamily: 'Latam Sans',
  },
  labels: ['Descuentos US$ 510k', 'Experiencia US$ 242K'],
  colors: ['#ff1d49', '#4f3bba'],
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
      },
    },
  },
  grid: {
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + '%'];
    },
  },
  legend: { show: false },
};
var chartPie = new ApexCharts(document.querySelector("#chart"), optionsPie);
chartPie.render();


// =======================
// NPS Chart
// =======================
const npsScore = 45;
var optionsNPS = {
  series: [{ data: [npsScore] }],
  colors: ['#ff1d49'],
  chart: {
    type: 'bar',
    fontFamily: 'Latam Sans',
    height: 100,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: { horizontal: true, columnWidth: '5%' },
  },
  xaxis: {
    categories: ['NPS Itaú-LATAM'],
    min: -100,
    max: 100,
    tickAmount: 4,
    labels: {
      formatter: val => val === 0 ? '0' : (val > 0 ? '+' + val : val.toString()),
    },
    axisBorder: { show: true, color: '#333' },
    axisTicks: { show: true, height: 10 },
  },
  yaxis: { show: false },
  grid: { show: false, padding: { top: 0, bottom: 0, left: 0, right: 0 } },
  dataLabels: {
    enabled: true,
    formatter: val => val + ' NPS Itaú Latam',
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      colors: ['#000'],
    },
  },
  legend: { show: false }
};
var chartNPS = new ApexCharts(document.querySelector("#chart-nps"), optionsNPS);
chartNPS.render();


// =======================
// Bar Chart
// =======================
var optionsBar = {
  series: [{ name: 'Inflation', data: [2.3, 3.1, 4.0] }],
  chart: {
    fontFamily: 'Latam Sans',
    height: 300,
    type: 'bar',
    toolbar: {
      show: false,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
  },
  grid: { padding: { bottom: 40 } },
  plotOptions: {
    bar: { borderRadius: 0, dataLabels: { position: 'top' } },
  },
  dataLabels: {
    enabled: true,
    formatter: val => val + "%",
    offsetY: -20,
    style: { fontSize: '12px', colors: ["#304758"] },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar"],
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: { enabled: false },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: false, formatter: val => val + "%" },
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 280,
    align: 'center',
    style: { color: '#444' },
  },
};
var chartBar = new ApexCharts(document.querySelector("#chart_item_4A"), optionsBar);
chartBar.render();

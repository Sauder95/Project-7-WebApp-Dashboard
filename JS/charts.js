// ========= CHARTS =================== //
let traffic = document.getElementById("trafficChart").getContext("2d");
let daily = document.getElementById("dailyChart").getContext("2d");
let mobile = document.getElementById("mobileChart").getContext("2d");

// ============ TRAFFIC CHART VARIABLES ===========================//
let defaultData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1500, 2500],
      fill: true,
      backgroundColor: ["rgba(116, 119, 191, 0.3)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

let hourlyData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1500, 2500],
      fill: true,
      backgroundColor: ["rgba(116, 119, 191, 0.3)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [700, 1200, 1000, 200, 1500, 1650, 1350],
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

let weeklyData = {
  labels: ["1", "7", "14", "21", "28"],
  datasets: [
    {
      data: [700, 1200, 1000, 200, 1500],
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

let monthlylyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec,",
  ],
  datasets: [
    {
      data: [
        700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1500, 2500, 2000,
      ],
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};
// ================ TRAFFIC OPTIONS ==================//

let trafficOptions = {
  responsive: true,
  aspectRatio: 2,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

// ================= TRAFFIC CHART ========================//

let trafficChart = new Chart(traffic, {
  type: "line",
  data: defaultData,
  options: trafficOptions,
});

// ================== DAILY CHART ==================//

let dailyChart = new Chart(daily, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "# of Votes",
        data: [65, 110, 170, 140, 230, 190, 85],
        backgroundColor: ["rgba(116, 119, 191, 1)"],
        borderColor: ["rgba(77, 76, 114, 0.2)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    aspectRatio: 2,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 250,
      },
    },
  },
});

// ================== Mobile CHART ==================//

let mobileChart = new Chart(mobile, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [
      {
        data: [2000, 550, 500],
        backgroundColor: [
          "rgba(116, 119, 191, 1)",
          "rgba(129, 201, 143, 1)",
          "rgba(81, 182, 200, 1)",
        ],
        borderColor: ["rgba(77, 76, 114, 0.2)"],
        borderWidth: 0.1,
      },
    ],
  },
  options: {
    resonsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
          fontStyle: "bold",
        },
      },
    },
  },
});

// ========= CHARTS =================== //
let traffic = document.getElementById("trafficChart");
let daily = document.getElementById("dailyChart").getContext("2d");
let mobile = document.getElementById("mobileChart").getContext("2d");

// ============ TRAFFIC CHART VARIABLES ===========================//

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
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
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
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

let monthlylyData = {
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
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};
// ================ TRAFFIC OPTIONS ==================//

let trafficOptions = {
  aspectRatio: 2.5,
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
  data: hourlyData,
  options: trafficOptions,
});

// let myChart = new Chart(traffic, {
//   type: "line",
//   data: {
//     labels: [
//       "16-22",
//       "23-29",
//       "30-5",
//       "6-12",
//       "13-19",
//       "20-26",
//       "27-3",
//       "4-10",
//       "11-17",
//       "18-24",
//       "25-31",
//     ],
//     datasets: [
//       {
//         data: [700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1500, 2500],
//         backgroundColor: ["rgba(116, 119, 191, 0.5)"],
//         borderColor: ["rgba(116, 119, 191, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     plugins: {},
//     scales: {
//       y: {
//         min: 0,
//         max: 2500,
//       },
//     },
//   },
// });

// // ================== DAILY CHART ==================//

// let myChart = new Chart(daily, {
//   type: "bar",
//   data: {
//     labels: ["S", "M", "T", "W", "T", "F", "S"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [65, 110, 170, 140, 230, 190, 85],
//         backgroundColor: ["rgba(116, 119, 191, 1)"],
//         borderColor: ["rgba(77, 76, 114, 0.2)"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     plugins: {},
//     scales: {
//       y: {
//         min: 0,
//         max: 250,
//       },
//     },
//   },
// });

// // ================== Mobile CHART ==================//

// let myChart = new Chart(mobile, {
//   type: "bar",
//   data: {
//     labels: ["S", "M", "T", "W", "T", "F", "S"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [65, 110, 170, 140, 230, 190, 85],
//         backgroundColor: ["rgba(116, 119, 191, 1)"],
//         borderColor: ["rgba(77, 76, 114, 0.2)"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     plugins: {},
//     scales: {
//       y: {
//         min: 0,
//         max: 250,
//       },
//     },
//   },
// });

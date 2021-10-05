=========== CHART UPDATE FUNCTION ==========//

let trafficLinks = document.querySelectorAll(".chart-link");

const updateChart = (chart, newData) => {
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.datasets[0].data;
  chart.update({
    duration: 500,
    easing: "linear",
  });
};

trafficLinks.addEventListener("click", (e) => {
  e.siblings.classList.remove("active");
  e.classList.add("active");

  if (e.textContent == "hourly") {
    updateChart(hourlyTraffic, hourlyData);
  } else if (e.textContent == "daily") {
    updateChart(dailyTraffic, dailyData);
  } else if (e.textContent == "weekly") {
    updateChart(weeklyTraffic, weeklyData);
  } else if (e.textContent == "monthly") {
    updateChart(monthlyTraffic, monthlyData);
  }
});

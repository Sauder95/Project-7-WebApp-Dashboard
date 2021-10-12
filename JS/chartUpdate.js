//=========== CHART UPDATE FUNCTION ==========//

let trafficLinks = document.querySelectorAll(".chart-link");

const updateChart = (chart, newData) => {
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.datasets[0].data;
  chart.update({
    duration: 500,
    easing: "linear",
  });
};

trafficLinks.forEach((link) => {
  link.addEventListener("click", function () {
    trafficLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    if (link.textContent === "Hourly") {
      updateChart(trafficChart, hourlyData);
    } else if (link.textContent === "Daily") {
      updateChart(trafficChart, dailyData);
    } else if (link.textContent === "Weekly") {
      updateChart(trafficChart, weeklyData);
    } else if (link.textContent === "Monthly") {
      updateChart(trafficChart, monthlylyData);
    }
  });
});

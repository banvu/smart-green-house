import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import sensorData from "../../file.json";
// import { getAllSensorData } from "../controller/smartgarden";

export default function KGraph() {
  const canvasEl = useRef(null);

  const colors = {
    white: {
      default: "rgba(0,0,0, 1)",
      half: "rgba(0,0,0, 0.5)",
      quarter: "rgba(0,0,0, 0.25)",
      zero: "rgba(0,0,0, 0)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.white.half);
    gradient.addColorStop(0.65, colors.white.quarter);
    gradient.addColorStop(1, colors.white.zero);

    // const Value_CO2 = [
    //   26.0, 26.2, 25.1, 27.4, 25.9, 26.2, 25.8, 25.6, 25.6, 25.2,
    // ];
    // const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    var sensor_Data = sensorData.recordset.map(function (e) {
      return e.K;
    });

    var sensor_Id = sensorData.recordset.map(function (e) {
      return e.Time;
    });

    //main
    const data = {
      //   labels: labels,
      labels: sensor_Id,
      datasets: [
        {
          backgroundColor: gradient,
          label: "K Sensor",
          data: sensor_Data,
          //   data: label.map(sensorData.recordset),
          //   data: sensorData.data,
          fill: true,
          borderWidth: 1,
          borderColor: colors.white.default,
          lineTension: 0.3,
          pointBackgroundColor: colors.white.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              ticks: {
                padding: 20,
              },
            },
          ],
        },
      },
      //   options: {
      //     plugins: {
      //       zoom: {
      //         limits: {
      //             x: { min: 0, max: 100 },
      //         },
      //       },
      //     },
      //   },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div class="chartWrapper">
      <div class="chartAreaWrapper">
        <div height="700" width="700">
          <canvas id="myChart" ref={canvasEl} className="px-10 mt-32" />
        </div>
      </div>
    </div>
  );
}

// Hook for refreshing data

// useEffect(() => {
//     const interval = setInterval(() => {
//        fetchGraphData();
//       },60*1000);
//       return () => clearInterval(interval);
//     }, []);

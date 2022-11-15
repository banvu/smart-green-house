import React, { useState, useEffect } from "react";
import LineGraph from "../graphs/LineGraph";
import OxyGraph from "../graphs/OxyGraph";
import ECGraph from "../graphs/ECGraph";
import HAirGraph from "../graphs/HAirGraph";
import HSoilGraph from "../graphs/HSoilGraph";
import KGraph from "../graphs/KGraph";
import LightGraph from "../graphs/LightGraph";
import NGraph from "../graphs/NGraph";
import PGraph from "../graphs/PGraph";
import PHGraph from "../graphs/PHGraph";
import TAirGraph from "../graphs/TAirGraph";
import TSoilGraph from "../graphs/TSoilGraph";

function Home() {
  // const [returnedData, setreturnedData] = useState({ CO2: "", Time: "" });
  const [returnedData, setreturnedData] = useState();
  let displayData;
  // const getData = async () => {
  async function getData() {
    // const newData = await fetch("/api", {
    await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((responseData) => {
        displayData = responseData.map(function (senData) {
          return (
            <tr key={senData.Id}>
              <td className=" p-3 text-sm text-gray-700">{senData.Id}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.Time}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.CO2}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.Oxy}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.EC}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.HAir}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.HSoil}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.K}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.Light}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.N}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.P}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.PH}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.TAir}</td>
              <td className=" p-3 text-sm text-gray-700">{senData.TSoil}</td>
            </tr>
          );
        });
        setreturnedData(displayData);
        console.log(responseData);
      });

    // console.log(newData);
    // setreturnedData(newData.result);
    // setreturnedData(newData[1]);
  }

  useEffect(() => {
    const id = setInterval(() => {
      getData();
    }, 60000);
    // }, 300000);
    getData();
    return () => clearInterval(id);
    // getData();
  }, []);

  return (
    <div className="mx-5 overflow-auto rounded-lg shadow flex">
      {/* <button onClick={() => getData()}>Click</button> */}
      {/* <p>CO2: {returnedData.CO2}</p>
      <p>Time: {returnedData.Time}</p> */}
      {/* table component */}
      <table className=" w-1/3">
        <thead className=" bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Id
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Time
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              CO2
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Oxy
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              EC
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              HAir
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              HSoil
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              K
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Light
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              N
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              P
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              PH
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              TAir
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              TSoil
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-100">{returnedData}</tbody>
      </table>
      {/* End of table component */}
      {/* Graph Component */}
      <div className=" w-2/3 bg-gray-400-600 mx-5">
        <div className=" text-center">
          <h1 className="p-3 text-sm font-semibold tracking-wide"> Graphs</h1>
        </div>
        <div className="text-center">
          <p className="p-3 text-sm font-semibold tracking-wide">CO2 Graph</p>
        </div>
        <LineGraph />
        <OxyGraph />
        <ECGraph />
        <HAirGraph />
        <HSoilGraph />
        <KGraph />
        <LightGraph />
        <NGraph />
        <PGraph />
        <PHGraph />
        <TAirGraph />
        <TSoilGraph />
      </div>
      {/* End of Graph Component */}
    </div>
  );
}

export default Home;

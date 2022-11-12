import React, { useState, useEffect } from "react";

function Home() {
  // const [returnedData, setreturnedData] = useState({ CO2: "", Time: "" });
  const [returnedData, setreturnedData] = useState();
  let displayData;
  // const getData = async () => {
  function getData() {
    // const newData = await fetch("/api", {
    fetch("/api", {
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
          return <p key={senData.Id}>{senData.CO2}</p>;
        });
        setreturnedData(displayData);
        // console.log(responseData);
      });

    // console.log(newData);
    // setreturnedData(newData.result);
    // setreturnedData(newData[1]);
  }

  useEffect(() => {
    // const id = setInterval(() => {
    //   getData();
    // }, 3000);
    // getData();
    // return () => clearInterval(id);
    getData();
  }, []);

  return (
    <div>
      {/* <button onClick={() => getData()}>Click</button> */}
      {/* <p>CO2: {returnedData.CO2}</p>
      <p>Time: {returnedData.Time}</p> */}
      {returnedData}
    </div>
  );
}

export default Home;

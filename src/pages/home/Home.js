import React, { useState } from "react";

function Home() {
  const [returnedData, setreturnedData] = useState({ CO2: "", Time: "" });
  // const [returnedData, setreturnedData] = useState();
  const getData = async () => {
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    console.log(newData);
    // setreturnedData(newData.result);
    setreturnedData(newData[0]);
  };

  return (
    <div>
      <button onClick={() => getData()}>Click</button>
      <p>CO2: {returnedData.CO2}</p>
      <p>Time: {returnedData.Time}</p>
    </div>
  );
}

export default Home;

const config = require("./dbConfig");
const sql = require("mssql");

const getSensorData = async () => {
  try {
    let pool = await sql.connect(config);
    let sensorData = await pool
      .request()
      // .query("select CO2, Id from Sensors_2022 order by Id ");
      .query("select * from Sensors_2022 order by Id DESC");
    // .query("select TOP 10 from Sensors_2022 order by Id ");
    //   .query("select CO2 from Sensors_2022 where Id = 20 ");
    //   .query("select CO2, Time from Sensors_2022 order by Id ");
    // console.log(sensorData);
    let sensorData1 = await pool
      .request()
      .query("select * from Sensors_2022 order by Id ");
    const fs = require("fs");
    fs.writeFileSync("./src/file.json", JSON.stringify(sensorData1));
    return sensorData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getSensorData,
};

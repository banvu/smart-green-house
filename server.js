const express = require("express");
const cors = require("cors");
const dbOperation = require("./dbFiles/dbOperation");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", async (req, res) => {
  console.log("Called server");
  //   const result = await dbOperation.getSensorData(req.body.Id);
  const result = await dbOperation.getSensorData();
  res.send(result.recordset);
  //   console.log(result.recordset);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

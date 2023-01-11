import express from "express";
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`Ứng dụng chạy trên cổng: ${port}`);
});

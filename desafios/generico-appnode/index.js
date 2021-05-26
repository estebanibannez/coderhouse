import { express, Router } from "express";

let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
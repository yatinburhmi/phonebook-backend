
import express from "express";
import {router as v1Router} from "./routes/index";
import {router as v1ContactRouter} from "./routes/contactRoute";


const app = express();

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("<h2>It is working</h2>");
// });

app.use(express.json());

app.use("/api/v1", v1Router);
app.use("/api/v1/contact", v1ContactRouter);

console.log("Hello index.js")
app.listen(PORT, () => {
  console.log("API is listening to PORT: ", PORT);
});

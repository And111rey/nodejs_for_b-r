import express from "express";
import mongoose from "mongoose";
//local
import router from "./router.js";


const PORT = 5001;
const pass = "user";
const DB_URL =
  "mongodb+srv://user:user@cluster0.fid29fo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB_URL_1 = `mongodb+srv://user:user@cluster0.fid29fo.mongodb.net/`;

const app = express();


app.use(express.json());
app.use('/api', router)

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json("server working....");
});



async function startApp() {
  try {
    await mongoose
      .connect(DB_URL)
      .then(() => console.log("DB CONNECTED...."))
      .catch((e) => console.log(e));
    app.listen(PORT, () => console.log(`server on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();

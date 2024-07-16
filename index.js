import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import CronJob from "./cron/index.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3100;

app.use(cors({ origin: "*" }));
app.use(express.json());

await ConnectDB();
CronJob();

app.listen(PORT, () => {
    console.log(`##### server listening at port:${PORT} #####`);
});
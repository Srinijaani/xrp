import { tickerDataCronJob } from "./tasks/tickerData.js";

const runCronJobs = () => {
    // Define the schedules for each job
    const job1Schedule = '0 0 * * *'; // Every five minutes

    tickerDataCronJob(job1Schedule);
};

export default runCronJobs;
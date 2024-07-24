import { tickerDataCronJob } from "./tasks/tickerData.js";

const runCronJobs = () => {
    // Define the schedules for each job
    const job1Schedule = '0 */1 * * *'; // Every one hour

    tickerDataCronJob(job1Schedule);
};

export default runCronJobs;
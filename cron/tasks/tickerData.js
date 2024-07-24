import cron from "node-cron";
import mongoose from "mongoose";
import { TickerData } from "../../schema/tickerData.schema.js";
import { tickerDataCron } from "../../services/tickerData/tickerData.controller.js";

export const tickerDataCronJob = async (schedule) => {
    cron.schedule(schedule, async () => {
        const transactionOptions = {
            readPreference: "primary",
            readConcern: { level: "local" },
            writeConcern: { w: "majority" },
            maxCommitTimeMS: 1000,
        };
        const session = await mongoose.startSession();
        session.startTransaction(transactionOptions);

        try {
            const ticker = await tickerDataCron();

            if (ticker?.length > 0) {
                // delete previousdata
                await TickerData.deleteMany({});
                // insert in db
                await TickerData.insertMany(ticker);
                console.log("----- success for ticker data -----");
            }
            await session.commitTransaction();

        } catch (error) {
            console.error('Job 2 Error:', error);
        }
    });
};

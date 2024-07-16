import axios from "axios";

// ##### CRON #####
export const tickerDataCron = async () => {
    try {
        let data = JSON.stringify({
            data: "test",
        });

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://data.xrplf.org/v1/iou/ticker_data/all?interval=1d",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        const response = await axios.request(config);
        return response?.data;
    } catch (error) {
        console.error("Error fetching ticker data:", error);
    }
};

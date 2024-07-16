import { Schema, model } from "mongoose";

const tickerDataSchema = new Schema(
    {
        date_from: {
            type: Date,
        },
        date_to: {
            type: Date,
        },
        base: {
            type: String,
        },
        counter: {
            type: String,
        },
        base_volume: {
            type: Number,
        },
        base_volume_buy: {
            type: Number,
        },
        base_volume_sell: {
            type: Number,
        },
        counter_volume: {
            type: Number,
        },
        counter_volume_buy: {
            type: Number,
        },
        counter_volume_sell: {
            type: Number,
        },
        first: {
            type: Number,
        },
        high: {
            type: Number,
        },
        low: {
            type: Number,
        },
        last: {
            type: Number,
        },
        exchanges: {
            type: Number,
        },
        unique_buyers: {
            type: Number,
        },
        unique_sellers: {
            type: Number,
        },
        trend_interval: {
            type: Number,
        },
    },
    {
        strict: false,
        timestamps: true,
    }
);

const collectionName = "tickerData";

export const TickerData = model("tickerData", tickerDataSchema, collectionName);

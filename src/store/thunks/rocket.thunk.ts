import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRockets = createAsyncThunk(
    "fetchRockets",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                "https://api.spacexdata.com/v3/rockets", {params: {id: true}}
            );
            return data;
        } catch (error) {
            throw error
        }
    }
);

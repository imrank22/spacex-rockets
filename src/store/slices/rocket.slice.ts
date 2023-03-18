import { createSlice } from "@reduxjs/toolkit";
import { IRocketInitialState } from "../../interfaces/rocket.interface";
import { fetchRockets } from "../thunks/rocket.thunk";

const initialState: IRocketInitialState = {
    loading: false,
    rockets: [],
    filteredRockets: [],
    errorMsg: "",
};

const rocketSlice = createSlice({
    name: "rockets",
    initialState,
    reducers: {
        setFilteredRockets: (state, {payload}) => {
            state.filteredRockets = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRockets.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRockets.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.loading = false;
            state.rockets = payload
            state.filteredRockets = payload
            state.errorMsg = ''
        });
        builder.addCase(fetchRockets.rejected, (state, {error: {message}}) => {
            state.loading = false;
            state.rockets = []
            state.errorMsg = message || "Failed to load rockets"
        });
    },
});

export const {
    setFilteredRockets
} = rocketSlice.actions

const rocketReducer = rocketSlice.reducer;

export default rocketReducer;

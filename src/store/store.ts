import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./slices/rocket.slice";

const store = configureStore({
    reducer: {
        rocketReducer: rocketsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

import { configureStore } from "@reduxjs/toolkit";
import { songsApi } from "../services/songsApi";

export default configureStore({
    reducer: {
        [songsApi.reducerPath]: songsApi.reducer,
    }
})
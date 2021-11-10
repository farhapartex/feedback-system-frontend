import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../features/userSlice";

export default configureStore({
    reducer: {
        user: userAuthReducer
    }
});
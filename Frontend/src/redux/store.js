import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/user.slice";
import taskReducer from "./Slice/task.slice";

const store = configureStore({
    reducer: {
        auth: userReducer,
        tasks: taskReducer,
    },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        // will fill later
    },
});

// console.log(store.getState());
// store.dispatch({
//     type: "counter/increment",
// });
// console.log(store.getState());

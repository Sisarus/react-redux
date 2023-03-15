import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";
import { destinationReducer } from "./Slice/destinationSlice";
import {
    increment,
    decrement,
    incrementMultiplier,
    decrementMultiplier,
} from "./Slice/counterSlice";
import {
    destinationClicked,
    resetDestination,
} from "./Slice/destinationSlice";

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        destinationStore: destinationReducer,
        // will fill later
    },
});

// console.log(store.getState());
// store.dispatch({
//     type: "counter/increment",
// });
// console.log(store.getState());

console.log(store.getState());

export {
    increment,
    decrement,
    incrementMultiplier,
    decrementMultiplier,
    destinationClicked,
    resetDestination,
};

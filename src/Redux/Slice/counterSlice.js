import { createSlice } from "@reduxjs/toolkit";
import { resetDestination} from "./destinationSlice";

const initalState = { count: 10 };

export const counterSlice = createSlice({
    name: "counter",
    initialState: initalState,
    reducers: {
        // Actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        decrementMultiplier: (state, action) => {
            state.count -= Number(action.payload);
        },
        incrementMultiplier: (state, action) => {
            console.log(action);
            state.count += Number(action.payload);
        },
        // resetCounter: (state) => {
        //     state.count = 10;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(resetDestination.toString(), (state) => {
            state.count = 10;
        });
    },
});

export const {
    increment,
    decrement,
    decrementMultiplier,
    incrementMultiplier,
    resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

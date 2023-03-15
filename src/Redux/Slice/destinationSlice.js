import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../actions";

const initalState = () => {
    return {
        destinations: [
            {
                name: "Big City",
                days: 5,
                fact: "Its very big. Needs at least 4month to cover whole city",
            },
            {
                name: "Little town",
                days: 2,
                fact: "Lovely contry flows.",
            },
            {
                name: "Moon",
                days: 200,
                fact: "When everything else has seen already",
            },
        ],
        destinationSelected: null,
    };
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initalState,
    reducers: {
        destinationClicked: (state, action) => {
            state.destinationSelected = action.payload;
        },
        resetDestination: (state, action) => {
            console.log(action);
            state.destinationSelected = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state) => {
            state.destinationSelected = null;
        });
    },
});

export const { destinationClicked, resetDestination } =
    destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;

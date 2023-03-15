import React from "react";
import { useDispatch } from "react-redux";
import { resetCounter } from "../Redux/Slice/counterSlice";
import { resetDestination } from "../Redux/Slice/destinationSlice";

function ResetApp() {
    const dispatch = useDispatch();

    const resetCounterAndDestination = () => {
        //dispatch(resetCounter());
        dispatch(resetDestination());
    };
    return (
        <div className="text-center">
            <button
                className="btn btn-warning"
                onClick={resetCounterAndDestination}
            >
                Reset App
            </button>
        </div>
    );
}

export default ResetApp;

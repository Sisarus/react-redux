import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import DestinationList from "./Components/DestinationList";
import DestinationFact from "./Components/DestinationFact";
import ResetApp from "./Components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="text-white">
        <Provider store={store}>
            <Header />
            <ResetApp/>
            <Counter />
            <div className="p-4 border text-center">
                <h4 className="text-success pb-4">
                    Destination List
                </h4>
                <DestinationList />
                <DestinationFact />
            </div>
        </Provider>
    </div>
);

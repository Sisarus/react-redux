import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="text-white">
        <Provider store={store}>
            <Header />
            <Counter />
        </Provider>
    </div>
);

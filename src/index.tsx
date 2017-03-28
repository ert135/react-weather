import * as React from "react";
import * as ReactDOM from "react-dom";

import { MainPage } from "./components/viewComponents/MainPage";

ReactDOM.render(
    <MainPage compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
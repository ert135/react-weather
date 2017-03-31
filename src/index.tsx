//Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import {Location} from "history";

//Components
import MainPage from "./components/viewComponents/MainPage";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={MainPage}></Route>
    </Router>,
    document.getElementById("example")
);
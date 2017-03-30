//deps
import * as React from "react";

//import components

//Stylesheets
import "../../stylesheets/main.scss";

export interface HelloProps { compiler: string; framework: string; }

export const MainPage = function(props: HelloProps){
    return <div className="ApplciationContainer">
        <h1>
            Hello From the main page
        </h1>
        <div className="page-container">
        </div>
    </div>
}
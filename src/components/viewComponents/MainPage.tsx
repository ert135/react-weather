//Libs
import * as React from "react";

//Components
import InputForm from "../InputForm";

//Stylesheets
import "../../stylesheets/main.scss";

interface MainPageProps { compiler: string; framework: string; }

export default class MainPage extends React.Component<MainPageProps, undefined> {
    render() {
        return <div className="MainPage">
            <InputForm/>
        </div>
    }
}
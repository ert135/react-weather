//Libs
import * as React from "react";

//Stylesheets
import "../../stylesheets/components/Header.scss";

interface HeaderProps { compiler: string; framework: string; }

export default class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return (
            <div className="Header">
                
            </div>
        )
    }
}
//Libs
import * as React from "react";

//Components

//Stylesheets
import "../stylesheets/components/InputForm.scss";

interface InputFormProps { 

}

export default class InputForm extends React.Component<InputFormProps, undefined> {
    render() {
        return (
            <div className="InputForm">
                <h1 className="InputForm__title">
                    Weather Application
                </h1>
                <form className="InputForm__form">
                    <label>
                        Postcode:
                        <input 
                            type="text" 
                            name="Postcode"
                            className="InputForm__input"
                        />
                    </label>
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}
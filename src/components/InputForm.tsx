//Libs
import * as React from "react";

//Stylesheets
import "../stylesheets/components/InputForm.scss";

interface InputFormProps { 

}

export interface InputFormState{
    value: string;
}

export default class InputForm extends React.Component<InputFormProps, InputFormState> {

    constructor(props: any) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: UIEvent) {
        //pass up event to state
        event.preventDefault();
    }

    render() {
        return (
            <div className="InputForm">
                <h1 className="InputForm__title">
                    Weather Application
                </h1>
                <form className="InputForm__form-container">
                    <label>
                        Postcode:
                        <input 
                            type="text" 
                            name="Postcode"
                            className="InputForm__input"
                            value={this.state.value}
                            onChange={this.handleChange}
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
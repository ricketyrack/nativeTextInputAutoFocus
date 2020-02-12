import { Component, createElement } from "react";
import { Keyboard, TextInput } from "react-native";

var Big = require('big.js');

export class NativeTextInputAutoFocus extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // hide the keyboard after 500ms
        setTimeout(() => { Keyboard.dismiss(); }, 100);
    }

    _onChangeText = (theText) => {
        if (theText.length >= 8) {

            if (this.props.valueAttribute) {
                this.props.valueAttribute.setValue(new Big(theText));
            }

            if (this.props.onChangeAction) {
                this.props.onChangeAction.execute();
            }

        }
    }
    
    render() {
        return (
            <TextInput
                autoFocus={true}
                style={this.props.style}
                key="textinput42"
                onChangeText={this._onChangeText}
                // valueAttribute is a Big
                defaultValue={this.props.valueAttribute != null
                                && this.props.valueAttribute.value != null 
                                ? this.props.valueAttribute.value.toString() : "zebra"}
            />
        );
    }

}
